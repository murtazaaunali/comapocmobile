import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { ContactServiceProvider } from '../contact-service/contact-service';

declare var cordova: any;

interface sdkNavigator extends Navigator {
  smartstore: any
}

@Injectable()
export class SmartstoreServiceProvider {
  // Soup name predefined
  // private storeName = 'contactsApp'
  private soupName = 'contacts';

  // Initialize Smart Store
  private smartStore(): any {
    return cordova.require("com.salesforce.plugin.smartstore")
  }


  constructor(private contactsService: ContactServiceProvider) {
    console.log('constructor');

    // const storeConfig = {
    //   storeName: this.storeName,
    //   isGlobalStore: true
    // };

    const contactsIndexSpecs = [
      { path: "Id", type: "string" },
      { path: "Name", type: "string" },
      { path: "Account", type: "string" },
      { path: "Department", type: "string" },
      { path: "Role__c", type: "string" },
      { path: "Role_DLH__c", type: "string" },
      { path: "Other_Department__c", type: "string" },
      { path: "Other_Job_Title__c", type: "string" },
      { path: "Email", type: "string" },
      { path: "Mobile", type: "string" },
      { path: "Fax", type: "string" },
      { path: "Survey__c", type: "string" },
      { path: "RecordType", type: "string" },
      { path: "CreatedBy", type: "string" },
      { path: "Owner", type: "string" },
      { path: "__local__", type: "string" },
      { path: "__locally_created__", type: "string" },
      { path: "__locally_updated__", type: "string" },
      { path: "__locally_deleted__", type: "string" }
    ];

    const accountsIndexSpecs = [
      { path: "Id", type: "string" },
      { path: "Name", type: "string" },
      { path: "Account", type: "string" },
      { path: "Department", type: "string" },
      { path: "Role__c", type: "string" },
      { path: "Role_DLH__c", type: "string" },
      { path: "Other_Department__c", type: "string" },
      { path: "Other_Job_Title__c", type: "string" },
      { path: "Email", type: "string" },
      { path: "MobilePhone", type: "string" },
      { path: "Fax", type: "string" },
      { path: "Survey__c", type: "string" },
      { path: "RecordType.Name", type: "string" },
      { path: "CreatedBy.Name", type: "string" },
      { path: "CreatedById", type: "string" },
      { path: "CreatedDate", type: "string" },
      { path: "Owner.Name", type: "string" },
      { path: "__local__", type: "string" },
      { path: "__locally_created__", type: "string" },
      { path: "__locally_updated__", type: "string" },
      { path: "__locally_deleted__", type: "string" }
    ];

    // let success = (soupName) => console.log('Soup ${soupName} was successfully created!');

    // let failure = (error) => console.error('Registering soup fails with error: ${error}');
    // if (!this.smartStore().soupExists(this.soupName)) {
    //   this.smartStore().registerSoup(this.soupName, indexSpecs, success, failure);
    // }

    // Registering Soups
    // if (!this.smartStore().soupExists('contacts')) {
    //   console.log('Dev Debug: Contacts Soup Not Found!');
    //   console.log('Dev Debug: Registering Contacts Soup');
    //   this.RegisterContactSoup('contacts', contactsIndexSpecs);
    //   console.log('Dev Debug: Registering Contacts Completed');
    //   console.log('Dev Debug: Trying to fill Contacts');
    //   this.FillContactsSoups();
    //   console.log('Dev Debug: Contacts filled');
    // }

    // if (!this.smartStore().soupExists('accounts')) {
    //   this.RegisterContactSoup('accounts', accountsIndexSpecs);
    // }

  }

  // RegisterContactSoup(soupName, indexSpecs) {
  //   let success = (soupName) => console.log('Dev Debug: Soup ' + soupName + ' was successfully created!');
  //   let failure = (error) => console.error(error, 'Dev Debug: Registering soup fails with error: ' + error);
  //   this.smartStore().registerSoup(this.soupName, indexSpecs, success, failure);
  // }

  // RegisterAccountSoup(soupName, indexSpecs) {
  //   let success = (soupName) => console.log('Dev Debug: Soup ' + soupName + ' was successfully created!');
  //   let failure = (error) => console.error('Dev Debug: Registering soup fails with error: ' + error);
  //   this.smartStore().registerSoup(this.soupName, indexSpecs, success, failure);
  // }

  // RegisterOpportunitiesSoup(soupName, indexSpecs) {
  //   let success = (soupName) => console.log('Soup ' + soupName + ' was successfully created!');
  //   let failure = (error) => console.error('Registering soup fails with error: ' + error);
  //   this.smartStore().registerSoup(this.soupName, indexSpecs, success, failure);
  // }

  // FillContactsSoups() {
  //   console.log("Dev Debug: Filling Soups");
  //   return this.contactsService.findAll()
  //     .then(results => {
  //       console.log("Dev Debug: Result:" + results);
  //       let success = (items) => console.log('Dev Debug: Items upserted to Soup: ' + items);
  //       let failure = (error) => console.error('Dev Debug: Soup Upsert Error: ' + error);
  //       console.log("Dev Debug: Upserting entries in Soup");
  //       this.smartStore().upsertSoupEntries('contacts', results.records, success, failure);
  //     });
  // }

  // GetContactsFromSoup() {
  //   const success = (results) => console.log({ results });
  //   const failure = (error) => console.log(error);
  //   var querySpec = (navigator as sdkNavigator).smartstore.buildAllQuerySpec('Name');
  //   console.log("QuerySpecs: " + querySpec);
  //   (navigator as sdkNavigator).smartstore.querySoup('contacts', querySpec, success, failure);
  // }

  // fillSoup() {

  //   console.log('App Debug: Filling Soups...');

  //   return this.contactsService.findAll()
  //     .then(results => {
  //       console.log("ResultSet: " + results);
  //       let success = (items) => console.log('Items upserted to Soup: ${items}');

  //       let failure = (error) => console.error('Soup Upsert Error: ${error}')

  //       this.smartStore().upsertSoupEntries(this.soupName, results.records, success, failure)
  //     });

  //   console.log('App Debug: Filling Soups Completed');
  // }

  // getAllFromSoup() {
  //   console.log('App Debug: Getting All Data from Soups...')
  //   var querySpec = (navigator as sdkNavigator).smartstore.buildAllQuerySpec('Name', 'ascending', 100)//, ['Name', 'Id'])
  //   console.log(querySpec)

  //   const success = (results) => console.log({ results })

  //   const failure = (error) => console.log(error);
  //   (navigator as sdkNavigator).smartstore.querySoup(this.soupName, querySpec, success, failure);

  //   console.log('App Debug: Getting All Data from Soups Completed')
  // }
}
