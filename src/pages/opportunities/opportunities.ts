import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController, NavParams } from 'ionic-angular';
import { SmartstoreServiceProvider } from "../../providers/smartstore-service/smartstore-service";
import { NamefilterPipe } from '../../pipes/namefilter/namefilter';

import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
/**
 * Generated class for the OpportunitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opportunities',
  templateUrl: 'opportunities.html',
  providers: [NamefilterPipe]
})
export class OpportunitiesPage {

  opportunities = [];
  searchFilter = '';
  loader;
  columns;
  rows;
  segments: string = "grid";
  page = 1;
  totalPages = 0;
  skeleton = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public filterCtrl: NamefilterPipe, public smartStoreService: SmartstoreServiceProvider) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.segments = "grid";
    this.GetAllOpportunities();
  }

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
      Opportunity_Type_ED_or_CC__c: {
        title: 'Opportunity Type',
        filter: false
      },
      AccountName: {
        title: 'Account Name',
        filter: false
      },
      StageName: {
        title: 'Stage Name',
        filter: false
      },
      Priority_Opportunity__c: {
        title: 'Priority Opportunity',
        filter: false
      },
      Probability: {
        title: 'Probability',
        filter: false
      },
      Departments__c: {
        title: 'Departments',
        filter: false
      },
      CloseDate: {
        title: 'Close Date',
        filter: false
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    }
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpportunitiesPage');

  }

  onSegmentChange(ev) {
    if (this.segments == 'list') {
      this.GetAllOpportunitiesList();
    } else {
      this.GetAllOpportunities();
    }
  }


  GetAllOpportunities() {
    // this.loader.present();
    this.skeleton = true;
    this.smartStoreService.GetOpportunitiesFromSoup().then(data => {
      this.totalPages = data.records.length / 9;
      for (let i = 0; i < 9; i++) {
        this.opportunities.push(data.records[i]);
      }
      setTimeout(() => {
        this.rows = this.opportunities;
        this.skeleton = false;
      }, 1500)

      // this.loader.dismiss();
    });
  }


  GetAllOpportunitiesList() {
    this.loader.present();
    this.smartStoreService.GetOpportunitiesFromSoup().then(data => {
      this.rows = new LocalDataSource(data.records);
      this.loader.dismiss();
    });
  }

  doInfinite(infiniteScroll) {
    this.smartStoreService.GetOpportunitiesFromSoup().then(data => {
      var start_num = 9 * this.page;
      setTimeout(() => {
        for (var i = 0; i < 9; i++) {
          this.opportunities.push(data.records[Number(start_num) + i]);
        }
        infiniteScroll.complete();
      }, 500);
    });
    this.page = this.page + 1;
  }

  onSearch(query: string = '') {
    if (query == '') {
      this.rows = new LocalDataSource(this.opportunities);
    }
    else {
      this.rows.setFilter([
        // fields we want to include in the search
        {
          field: 'Name',
          search: query
        },
        {
          field: 'Opportunity_Type_ED_or_CC__c',
          search: query
        },
        {
          field: 'AccountName',
          search: query
        },
        {
          field: 'StageName',
          search: query
        },
        {
          field: 'Priority_Opportunity__c',
          search: query
        },
        {
          field: 'Departments__c',
          search: query
        }
      ], false);
    }

  }

}
