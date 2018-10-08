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
})
export class OpportunitiesPage {

  opportunities=[];
  searchFilter = '';
  loader;
  columns;
  rows;
  segments: string = "grid";
  page = 1;
  totalPages = 0;
  skeleton = true;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController, public filterCtrl: NamefilterPipe, public smartStoreService: SmartstoreServiceProvider) {
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
      Job_Title__c: {
        title: 'Job Title',
        filter: false
      },
      Department: {
        title: 'Department',
        filter: false
      },
      Email: {
        title: 'Email',
        sort: false,
        filter: false
      },
      Phone: {
        title: 'Phone',
        sort: false,
        filter: false
      },
      MobilePhone: {
        title: 'Mobile',
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
          field: 'Job_Title__c',
          search: query
        },
        {
          field: 'Department',
          search: query
        },
        {
          field: 'Email',
          search: query
        },
        {
          field: 'Phone',
          search: query
        },
        {
          field: 'MobilePhone',
          search: query
        }
      ], false);
    }

  }

}
