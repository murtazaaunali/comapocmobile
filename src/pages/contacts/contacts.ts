import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController, NavParams } from 'ionic-angular';

import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { SmartstoreServiceProvider } from "../../providers/smartstore-service/smartstore-service";

import { ContactsFilterModalPage } from "../contacts-filter-modal/contacts-filter-modal";
import { NewContactPage } from "../new-contact/new-contact";
import { NamefilterPipe } from '../../pipes/namefilter/namefilter';

import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { ContactPage } from '../contact/contact';

import 'rxjs';
import {style, state, animate, transition, trigger} from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
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
export class ContactsPage {
  contacts = [];
  searchFilter = '';
  loader;
  temp = [];
  segments: string = "grid";
  columns;
  rows;
  page = 1;
  totalPages = 0;
  showSlider=false;
  filter={
    Name:'',
    Job_Title__c:'',
    Department:'',
    Phone:'',
    MobilePhone:'',
    Email:'',
  };


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
  contact_list;

  skeleton = true;

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactsService: ContactServiceProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public filterCtrl: NamefilterPipe, public smartStoreService: SmartstoreServiceProvider) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.segments = "grid";
    this.GetAllContacts();
  }

  OpenFiltersSlider() {
    this.showSlider=true;
    //let filterModal = this.modalCtrl.create(ContactsFilterModalPage);
    //filterModal.present();
  }

  CloseFiltersSlider(){
    this.showSlider=false;
  }

  onSegmentChange(ev) {
    if (this.segments == 'list') {
      this.GetAllContactsList();
    } else {
      this.GetAllContacts();
    }
  }

  AddNewContactModal() {
    this.navCtrl.push(NewContactPage);
  }

  SearchContact(filters) {
    this.loader.present();
    this.smartStoreService.GetContactsByFilterFromSoup(filters).then(data => {
      this.contacts = data;
      this.loader.dismiss();
    });
  }

  GotoContactDetail(ev){
    console.log(ev.data);
    this.navCtrl.push(ContactPage,{ contactId: ev.data.id});

  }

  GetAllContacts() {
    // this.loader.present();
    this.skeleton = true;
    this.smartStoreService.GetContactsFromSoup().then(data => {
      this.totalPages = data.records.length / 9;
      for (let i = 0; i < 9; i++) {
        this.contacts.push(data.records[i]);
      }
      setTimeout(() => {
        this.rows = this.contacts;
        this.temp = this.rows;
        this.skeleton = false;
      }, 1500)

      // this.loader.dismiss();
    });
  }

  GetAllContactsList() {
    this.loader.present();
    this.smartStoreService.GetContactsFromSoup().then(data => {
      this.rows = new LocalDataSource(data.records);
      this.contact_list = data.records;
      this.loader.dismiss();
    });
  }

  doInfinite(infiniteScroll) {
    this.smartStoreService.GetContactsFromSoup().then(data => {
      var start_num = 9 * this.page;
      setTimeout(() => {
        for (var i = 0; i < 9; i++) {
          this.contacts.push(data.records[Number(start_num) + i]);
        }
        infiniteScroll.complete();
      }, 500);
    }
    );
    this.page = this.page + 1;
  }

  /* Ali;s Addition */
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
      this.rows = new LocalDataSource(this.contact_list);
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
  /* Ali;s Addition */
}
