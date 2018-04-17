import {Component, OnInit} from '@angular/core';
import {OrchestraMIEndpointService} from './OrchestraMIEndpointService.service';
import {BranchInfoEntity} from './entity/branch-info.entity';


import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
