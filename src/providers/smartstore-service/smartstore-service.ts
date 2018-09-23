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
  private storeName = 'userstore'
  private soupName = 'contacts';

  // Initialize Smart Store
  private smartStore(): any {
    return cordova.require("com.salesforce.plugin.smartstore")
  }


  constructor(private contactsService: ContactServiceProvider) {
    console.log('constructor');

    const storeConfig = {
      storeName: this.storeName,
      isGlobalStore: true
    };

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

    let success = (soupName) => console.log('Soup ${soupName} was successfully created!');

    let failure = (error) => console.error('Registering soup fails with error: ${error}');
    if (!this.smartStore().soupExists(this.soupName)) {
      this.smartStore().registerSoup(this.soupName, contactsIndexSpecs, success, failure);
    }

    // Registering Soups
    if (!this.smartStore().soupExists('contacts')) {
      console.log('Dev Debug: Contacts Soup Not Found!');
      console.log('Dev Debug: Registering Contacts Soup');
      this.RegisterContactSoup('contacts', contactsIndexSpecs);
      console.log('Dev Debug: Registering Contacts Completed');
      console.log('Dev Debug: Trying to fill Contacts');
      this.FillContactsSoups();
      console.log('Dev Debug: Contacts filled');
    }

  }

  RegisterContactSoup(soupName, indexSpecs) {
    let success = (soupName) => console.log('Dev Debug: Soup ' + soupName + ' was successfully created!');
    let failure = (error) => console.error(error, 'Dev Debug: Registering soup fails with error: ' + error);
    this.smartStore().registerSoup(this.soupName, indexSpecs, success, failure);
  }

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

  FillContactsSoups() {
    console.log("Dev Debug: Filling Soups");
    return this.contactsService.loadContacts()
      .then(results => {
        console.log("Dev Debug: Result:" + results);
        let success = (items) => console.log('Dev Debug: Items upserted to Soup: ' + items);
        let failure = (error) => console.error('Dev Debug: Soup Upsert Error: ' + error);
        console.log("Dev Debug: Upserting entries in Soup");
        this.smartStore().upsertSoupEntries('contacts', results.records, success, failure);
      });
  }

  GetContactsFromSoup() : Promise<any> {
    return new Promise((resolve, reject) => {
      var querySpec = (navigator as sdkNavigator).smartstore.buildAllQuerySpec('Name');
      let success = (results) => resolve({ records: results.currentPageOrderedEntries });
      (navigator as sdkNavigator).smartstore.querySoup(this.soupName, querySpec, success, reject);
    });
  }
}
