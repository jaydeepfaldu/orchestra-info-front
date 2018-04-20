import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from '../../../node_modules/rxjs';
import {OrchestraMIEndpointService} from '../OrchestraMIEndpointService.service';
import {BranchServiceInfoEntity} from '../entity/branch-service-info.entity';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


declare var qevents: any;


@Component({
  selector: 'app-branch-services-info',
  templateUrl: './branch-services-info.component.html',
  styleUrls: ['./branch-services-info.component.css']
})
export class BranchServicesInfoComponent implements OnInit, OnDestroy {

  branchId: number;

  public branchServiceInfos: BranchServiceInfoEntity[];
  public subscription: Subscription;

  constructor(private  orch: OrchestraMIEndpointService, private route: ActivatedRoute) {
  }


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.branchId = params.branchId;
      console.log(this.branchId);

      qevents.init(false, data => {
        console.log('Connection status fallback executed', data);
      });
      qevents.subscribe('**', (data) => {
        console.log(data);
      });


    });


    this.refreshServices();
    this.subscription = Observable.interval(5000).subscribe(() => this.refreshServices());
  }

  public ngOnDestroy() {
    console.log('BranchServicesInfoComponent : ngOnDestroy');

    this.subscription.unsubscribe();

  }

  refreshServices() {
    this.orch.getBranchesService(this.branchId).then(branchServiceInfos => {
      console.log(branchServiceInfos);
      this.branchServiceInfos = branchServiceInfos;
    });
  }


}
