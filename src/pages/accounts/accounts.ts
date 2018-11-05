
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController, NavParams } from 'ionic-angular';

import { SmartstoreServiceProvider } from "../../providers/smartstore-service/smartstore-service";

import { NamefilterPipe } from '../../pipes/namefilter/namefilter';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

import 'rxjs';
import {style, state, animate, transition, trigger} from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
  providers: [NamefilterPipe],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(300, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(300, style({opacity:0})) 
      ])
    ])
  ]
})
export class AccountsPage {
  accounts = [];
  searchFilter = '';
  loader;
  temp = [];
  segments: string = "grid";
  columns;
  rows;
  page = 1;
  totalPages = 0;
  showSlider=false;


  // Settings for Ng2Table
  settings = {
    pager: {
      display: true,
      perPage: 12

    },
    columns: {
      Name: {
        title: 'Name',
        filter: false
      },
      AHA_Number__c: {
        title: 'AHA Number',
        filter: false
      },
      IDN__c: {
        title: 'IDN',
        filter: false
      },
      GPO_Name__c: {
        title: 'GPO Name',
        sort: false,
        filter: false
      },
      Record_Type__c: {
        title: 'Record Type',
        sort: false,
        filter: false
      },
      Abbott_AccountID__c: {
        title: 'Abbott ID',
        sort: false,
        filter: false
      },
      ShippingAddress: {
        title: 'Shipping Address',
        sort: false,
        filter: false
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }
  };
  account_list;

  skeleton = true;

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public filterCtrl: NamefilterPipe, public smartStoreService: SmartstoreServiceProvider) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.segments = "grid";
    this.GetAllAccounts();
  }


  onSegmentChange(ev) {
    if (this.segments == 'list') {
      this.GetAllAccountsList();
    } else {
      this.GetAllAccounts();
    }
  }



  SearchContact(filters) {
    this.loader.present();
    this.smartStoreService.GetAccountsByFilterFromSoup(filters).then(data => {
      this.accounts = data;
      this.loader.dismiss();
    });
  }

  GetAllAccounts() {
    // this.loader.present();
    this.skeleton = true;
    this.smartStoreService.GetAccountsFromSoup().then(data => {
      this.totalPages = data.records.length / 9;
      for (let i = 0; i < 9; i++) {
        this.accounts.push(data.records[i]);
      }
      setTimeout(() => {
        this.rows = this.accounts;
        this.temp = this.rows;
        this.skeleton = false;
      }, 1500)

      // this.loader.dismiss();
    });
  }

  GetAllAccountsList() {
    this.loader.present();
    this.smartStoreService.GetAccountsFromSoup().then(data => {
      this.rows = new LocalDataSource(data.records);
      this.account_list = data.records;
      this.loader.dismiss();
    });
  }

  doInfinite(infiniteScroll) {
    this.smartStoreService.GetContactsFromSoup().then(data => {
      var start_num = 9 * this.page;
      setTimeout(() => {
        for (var i = 0; i < 9; i++) {
          this.accounts.push(data.records[Number(start_num) + i]);
        }
        infiniteScroll.complete();
      }, 500);
    }
    );
    this.page = this.page + 1;
  }


  FilterTableRows(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    this.temp = this.rows.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = this.temp;
  }

  onSearch(query: string = '') {
    if (query == '') {
      this.rows = new LocalDataSource(this.account_list);
    }
    else {
      this.rows.setFilter([
        // fields we want to include in the search
        {
          field: 'Name',
          search: query
        },
        {
          field: 'AHA_Number__c',
          search: query
        },
        {
          field: 'IDN__c',
          search: query
        },
        {
          field: 'GPO_Name__c',
          search: query
        },
        {
          field: 'Record_Type__c',
          search: query
        },
        {
          field: 'Abbott_AccountID__c',
          search: query
        },
        {
          field: 'ShippingAddress',
          search: query
        }
      ], false);
    }

  }

}
