import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


declare var cordova: any;

interface sdkNavigator extends Navigator {
  smartsync: any
}

@Injectable()
export class SmartsyncServiceProvider {

  public storeName = 'userstore';

  constructor() {
    const storeConfig = {
      storeName: this.storeName,
      isGlobalStore: true
    };
  }

  // Initialize Smart Sync
  public smartSync(): any {
    return cordova.require("com.salesforce.plugin.smartsync");
  }


  public SyncContacts(): any {

    var target = { type: "soql", query: "SELECT Id, Name, Account.Name, Department, Role__c, Role_DLH__c, Other_Department__c, Job_Title__c, Other_Job_Title__c, Email, MobilePhone, Fax, Survey__c, RecordType.Name, CreatedBy.Name, CreatedById, CreatedDate, Owner.Name FROM Contact LIMIT 1000" };

    this.smartSync().syncDown(target, "contacts", { mergeMode: 'LEAVE_IF_CHANGED' }, response => {
      return response;
      // if (response.status !== "DONE") {
      //   console.log("Progress:" + response.progress);
      // } else {
      //   console.log("Progress:" + response.progress);
      // }
    });
  }
}