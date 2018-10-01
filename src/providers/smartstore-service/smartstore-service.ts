import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


// declare var cordova: any;

interface sdkNavigator extends Navigator {
  smartstore: any
}

@Injectable()
export class SmartstoreServiceProvider {
  // Soup name predefined
  // private storeName = 'userstore';
  private soupName = 'contacts';

  // Initialize Smart Store
  // private smartStore(): any {
  //   return cordova.require("com.salesforce.plugin.smartstore");
  // }

  constructor() {
    // const storeConfig = {
    //   storeName: this.storeName,
    //   isGlobalStore: true
    // };
  }

  GetContactsFromSoup(): Promise<any> {
    return new Promise((resolve, reject) => {
      var querySpec = (navigator as sdkNavigator).smartstore.buildAllQuerySpec('Name', 'ascending', 10000);
      let success = (results) => resolve({ records: results.currentPageOrderedEntries });
      (navigator as sdkNavigator).smartstore.querySoup(this.soupName, querySpec, success, reject);
    });
  }

  GetContactsByFilterFromSoup(filters): Promise<any> {
    console.log(filters);
    return new Promise((resolve, reject) => {
      var querySpec = (navigator as sdkNavigator).smartstore.buildAllQuerySpec(filters, 'ascending', 10000);
      console.log('QuerySpecs: ' + querySpec);
      let success = (results) => resolve({ records: results.currentPageOrderedEntries });
      (navigator as sdkNavigator).smartstore.querySoup(this.soupName, querySpec, success, reject);
    });
  }
}
