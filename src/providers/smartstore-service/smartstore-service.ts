import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

declare var cordova: any;

interface sdkNavigator extends Navigator {
  smartstore: any
}

@Injectable()
export class SmartstoreServiceProvider {
  // Soup name predefined
  private storeName = 'userstore';
  private soupName = 'contacts';

  // Initialize Smart Store
  private smartStore(): any {
    return cordova.require("com.salesforce.plugin.smartstore");
  }

  constructor() {
    const storeConfig = {
      storeName: this.storeName,
      isGlobalStore: true
    };
  }

  // FillContactsSoups() {
  //   console.log("Dev Debug: Filling Soups");
  //   return this.contactsService.loadContacts()
  //     .then(results => {
  //       console.log("Dev Debug: Result:" + results);
  //       let success = (items) => console.log('Dev Debug: Items upserted to Soup: ' + items);
  //       let failure = (error) => console.error('Dev Debug: Soup Upsert Error: ' + error);
  //       console.log("Dev Debug: Upserting entries in Soup");
  //       this.smartStore().upsertSoupEntries('contacts', results.records, success, failure);
  //     });
  // }

  GetContactsFromSoup(): Promise<any> {
    return new Promise((resolve, reject) => {
      var querySpec = (navigator as sdkNavigator).smartstore.buildAllQuerySpec('Id');
      let success = (results) => resolve({ records: results });
      (navigator as sdkNavigator).smartstore.querySoup(this.soupName, querySpec, success, reject);
    });
  }
}
