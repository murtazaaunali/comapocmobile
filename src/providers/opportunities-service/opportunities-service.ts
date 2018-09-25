import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { DataService } from 'forcejs';
/*
  Generated class for the OpportunitiesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OpportunitiesServiceProvider {

  service: any;
  responseData: any;

  constructor() {
    this.service = DataService.getInstance();
  }

  loadAccounts() {
    return this.service.query('SELECT Id, Name, Owner, Account, Opportunity_Type_ED_or_CC__c, Priority_Opportunity__c, EETerritoryAssigned__c, Departments__c, Competitor__c, CloseDate, Close_Date_Reviewed__c, Projected_Go_Live_Date__c, Actual_Capital_Ship_Date__c, Run_Rate_Achieved_Date__c, Projected_Implementation_Start_Date__c, Self_Implementation__c, Marketing_Program__c, StageName, Probability, Confidence__c, Opportunity_Cartridge_Amount__c, Total_Cartridge_Volume__c, Opportunity_Equipment_Software_Amount__c, Forecast_Dollar_Contribution__c, Cartridges_text__c, i_STATs_Currently_Interfaced__c, RT_Has_Own_CLIA_License__c, Hospital_System__c, GPO__c, RecordType, CreatedBy.Name, CreatedById, CreatedDate, Owner.Name FROM Opportunity');
  }

}
