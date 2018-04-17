import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {Observable} from '../../../node_modules/rxjs';
import {BranchInfoEntity} from '../entity/branch-info.entity';
import {OrchestraMIEndpointService} from '../OrchestraMIEndpointService.service';
import {Subscription} from 'rxjs/Subscription';




@Component({
  selector: 'app-branch-info',
  templateUrl: './branch-info.component.html',
  styleUrls: ['./branch-info.component.css']
})
export class BranchInfoComponent implements OnInit, OnDestroy {


  public branchInfos: BranchInfoEntity[];
  public subscription: Subscription;

  constructor(private orch: OrchestraMIEndpointService, private zone: NgZone) {

    console.log('BranchInfoComponent:constructor ');
    // this.loadScript('/workstationterminal/scripts/jquery/jquery-1.7.2.js');
  }

  node: any;




  public loadScript(str) {
    console.log('preparing to load...');
    this.node = document.createElement('script');
    this.node.src = str;
    this.node.type = 'text/javascript';
    this.node.async = true;
    this.node.charset = 'utf-8';
    document.getElementsByTagName('body')[0].appendChild(this.node);
  }


  public ngOnInit() {
    console.log('BranchInfoComponent:ngOnInit');


//    this.qeventss.subscribe('**', data => this.getValue());



  //  this.subscription =  qevents.subscribe('**', (data) => {
   //   console.log('Reciever Event: ', JSON.parse(data));
  //  });


    this.refreshBranches();
    this.subscription = Observable.interval(5000).subscribe(() => this.refreshBranches());
  }

  refreshBranches() {
    this.orch.getBranches().then(branchInfos => {
      console.log(branchInfos);
      this.branchInfos = branchInfos;
    });
  }

  getValue() {
    console.log('Event Generate');
  }


  ngOnDestroy(): void {
    console.log('BranchInfoComponent : ngOnDestroy');

    this.subscription.unsubscribe();
  }

}
