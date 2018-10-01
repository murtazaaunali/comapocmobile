import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { DataService } from 'forcejs';

@Injectable()
export class ContactServiceProvider {
  service: any;
  responseData: any;

  constructor() {
    this.service = DataService.getInstance();

  }

  loadContacts() {
    return this.service.query('SELECT Id, Name, Account.Name, Department, Role__c, Role_DLH__c, Other_Department__c, Job_Title__c, Other_Job_Title__c, Email, MobilePhone, Fax, Survey__c, RecordType.Name, CreatedBy.Name, CreatedById, CreatedDate, Owner.Name FROM Contact LIMIT 10');
  }
}
