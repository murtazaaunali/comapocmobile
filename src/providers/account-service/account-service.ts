import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { DataService } from 'forcejs';


@Injectable()
export class AccountServiceProvider {

  service: any;
  responseData: any;

  constructor() {
    this.service = DataService.getInstance();
  }

  loadAccounts() {
    return this.service.query('SELECT Id, Name, AHA_Number__c, IDN__c, GPO_Name__c, ShippingAddress, Lattitude__c, Longitude__c, Record_Type__c, Parent, Abbott_AccountID__c, CreatedBy.Name, CreatedById, CreatedDate, Owner.Name FROM Account');
  }

}
