import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BranchInfoEntity} from './entity/branch-info.entity';
import {BranchServiceInfoEntity} from './entity/branch-service-info.entity';



@Injectable()
export class OrchestraMIEndpointService {



  constructor(private http: HttpClient) {
  }


  getBranches(): Promise <BranchInfoEntity[]>{
    console.log('OrchestraMIEndpointService:getBranches');
    return this.http.get<BranchInfoEntity[]>('/rest/managementinformation/branches/').toPromise();
  }


  getBranchesService(branchId): Promise <BranchServiceInfoEntity[]>{
    return this.http.get<BranchServiceInfoEntity[]>('/rest/managementinformation/branches/'+branchId+'/queues/').toPromise();
  }

}
