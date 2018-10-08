import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


declare var cordova: any;

interface sdkNavigator extends Navigator {
  smartsync: any
}

@Injectable()
export class SmartsyncServiceProvider {

  public storeName = 'usersync';

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

  // Sync Contacts
  public SyncContacts(): Promise<any> {
    var target = { type: "soql", query: "SELECT Id, Name, Account.Name, Department, Role__c, Role_DLH__c, Other_Department__c, Job_Title__c, Other_Job_Title__c, Email, MobilePhone, Fax, Survey__c, RecordType.Name, CreatedBy.Name, CreatedById, CreatedDate, Owner.Name FROM Contact LIMIT 1000" };
    return new Promise((resolve, reject) => {
      this.smartSync().syncDown(target, "contacts", { mergeMode: 'LEAVE_IF_CHANGED' }, response => {
        resolve(response);
      },
        error => {
          reject(error);
        });
    });

  }

  // Sync Accounts
  public SyncAccounts(): Promise<any> {
    var target = { type: "soql", query: "SELECT Id, Name, AHA_Number__c, IDN__c, GPO_Name__c, ShippingAddress, Latitude__c, Longitude__c, Record_Type__c, Parent.Name,  Owner.Name, Abbott_Account_ID__c FROM Account LIMIT 1000" };
    return new Promise((resolve, reject) => {
      this.smartSync().syncDown(target, "accounts", { mergeMode: 'LEAVE_IF_CHANGED' }, response => {
        resolve(response);
      },
        error => {
          reject(error);
        });
    });
  }

  // Sync Opportunities
  public SyncOpportunities(): Promise<any> {
    var target = { type: "soql", query: "SELECT Id, Name, Owner.Name, Account.Name, Opportunity_Type_ED_or_CC__c, Priority_Opportunity__c, EETerritoryAssigned__c, Departments__c, Competitor__c, CloseDate, Close_Date_Reviewed__c, Projected_Go_Live_Date__c, Actual_Capital_Ship_Date__c, Run_Rate_Achieved_Date__c, Projected_Implementation_Start_Date__c, Self_Implementation__c, Marketing_Program__c, StageName, Probability, Confidence__c, Opportunity_Cartridge_Amount__c, Total_Cartridge_Volume__c, Opportunity_Equipment_Software_Amount__c, Forecast_Dollar_Contribution__c, Cartridges_text__c, i_STATs_Currently_Interfaced__c, RT_Has_Own_CLIA_License__c, Hospital_System__c, GPO__c, RecordType.Name FROM Opportunity LIMIT 1000" };
    return new Promise((resolve, reject) => {
      this.smartSync().syncDown(target, "opportunities", { mergeMode: 'LEAVE_IF_CHANGED' }, response => {
        resolve(response);
      },
        error => {
          reject(error);
        });
    });
  }
}