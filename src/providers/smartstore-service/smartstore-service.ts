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

  GetContactsFromSoup(): Promise<any> {
    return new Promise((resolve, reject) => {
      var querySpec = (navigator as sdkNavigator).smartstore.buildAllQuerySpec('Name', 'ascending', 10000);
      let success = (results) => resolve({ records: results.currentPageOrderedEntries });
      (navigator as sdkNavigator).smartstore.querySoup('contacts', querySpec, success, reject);
    });
  }

  GetContactsByFilterFromSoup(filters): Promise<any> {
    console.log(filters);
    return new Promise((resolve, reject) => {
      var querySpec = (navigator as sdkNavigator).smartstore.buildAllQuerySpec(filters, 'ascending', 10000);
      console.log('QuerySpecs: ' + querySpec);
      let success = (results) => resolve({ records: results.currentPageOrderedEntries });
      (navigator as sdkNavigator).smartstore.querySoup('contacts', querySpec, success, reject);
    });
  }

  GetContactsByIDFromSoup(id): Promise<any> {
    return new Promise((resolve, reject) => {
      var querySpec = (navigator as sdkNavigator).smartstore.buildExactQuerySpec('Id', id);
      console.log('QuerySpecs: ' + querySpec);
      let success = (results) => resolve({ records: results.currentPageOrderedEntries });
      (navigator as sdkNavigator).smartstore.querySoup('contacts', querySpec, success, reject);
    });
  }


  GetOpportunitiesFromSoup(): Promise<any> {
    return new Promise((resolve, reject) => {
      var querySpec = (navigator as sdkNavigator).smartstore.buildAllQuerySpec('Name', 'ascending', 10000);
      let success = (results) => resolve({ records: results.currentPageOrderedEntries });
      (navigator as sdkNavigator).smartstore.querySoup('opportunities', querySpec, success, reject);
    });
  }
}
