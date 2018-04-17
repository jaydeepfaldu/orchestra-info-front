export class BranchServiceInfoEntity {

  id : number;
  branchId : number;
  name : string;
  queueType : string;
  branchName : string;
  customersWaiting : number;
  openServicePoints : number;
  waitingTime : number;
  appointmentWaitingTime : number;
  estimatedWaitingTime : number;
  customersServed : number;
  numberOfServedServices : number;
  serviceLevel : number;

}
