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

  searchFilteredContacts(filters, contacts) {
    return new Promise((resolve, reject) => {
      this.responseData = contacts.filter(function (el) {
        return (el.name.toLowerCase() == filters.firstName.toLowerCase() ||
          el.job_title.toLowerCase() == filters.jobTitle.toLowerCase() ||
          el.department.toLowerCase() == filters.department.toLowerCase() ||
          el.phone == filters.phone ||
          el.mobile == filters.mobile ||
          el.email == filters.email ||
          el.account_name.toLowerCase() == filters.accountName.toLowerCase());
      });
      console.log(this.responseData);
      if (this.responseData.length > 0) {
        resolve(this.responseData);
      }
      else {
        console.log("No Contacts Found");
        reject([]);
      }
    });
  }
}
