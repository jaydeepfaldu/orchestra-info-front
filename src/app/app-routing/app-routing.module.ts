import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BranchServicesInfoComponent} from '../branch-services-info/branch-services-info.component';
import {BranchInfoComponent} from '../branch-info/branch-info.component';


const  routes: Routes = [
  {
    path : '',
    redirectTo: 'branch',
    pathMatch: 'full'
  },
  {
    path: 'branch',
    component: BranchInfoComponent
  },
  {
    path: 'branch/:branchId',
    component: BranchServicesInfoComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
