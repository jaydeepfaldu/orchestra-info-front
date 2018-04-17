import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {OrchestraMIEndpointService} from './OrchestraMIEndpointService.service';



import { AppComponent } from './app.component';
import { BranchServicesInfoComponent } from './branch-services-info/branch-services-info.component';
import { BranchInfoComponent } from './branch-info/branch-info.component';
import {AppRoutingModule} from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BranchServicesInfoComponent,
    BranchInfoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    OrchestraMIEndpointService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


