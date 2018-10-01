import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController, NavParams } from 'ionic-angular';

import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { SmartstoreServiceProvider } from "../../providers/smartstore-service/smartstore-service";

import { ContactsFilterModalPage } from "../contacts-filter-modal/contacts-filter-modal";
import { NewContactPage } from "../new-contact/new-contact";
import { NamefilterPipe } from '../../pipes/namefilter/namefilter';
import 'rxjs';

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
  providers: [NamefilterPipe]
})
export class ContactsPage {
  contacts = [];
  searchFilter = '';
  loader;
  temp = [];
  segments: string = "grid";
  public columns: any;
  public rows: any;
  page = 1;
  totalPages = 0;

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactsService: ContactServiceProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public filterCtrl: NamefilterPipe, public smartStoreService: SmartstoreServiceProvider) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.segments = "grid";
    this.GetAllContacts();
  }

  OpenFiltersModal() {
    let filterModal = this.modalCtrl.create(ContactsFilterModalPage, { searchContacts: this.SearchContact.bind(this) });
    filterModal.present();
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


  GetAllContacts() {
    this.loader.present();
    this.smartStoreService.GetContactsFromSoup().then(data => {
      this.totalPages = data.records.length / 9;
      for (let i = 0; i < 9; i++) {
        this.contacts.push(data.records[i]);
      }
      this.rows = this.contacts;
      this.temp = this.rows;
      this.loader.dismiss();
    });
  }

  GetAllContactsList() {
    this.loader.present();
    this.smartStoreService.GetContactsFromSoup().then(data => {
      this.rows = data.records;
      this.temp = this.rows;
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
    });
    this.page = this.page + 1;
  }

  /* Ali;s Addition */
  FilterTableRows(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }
  /* Ali;s Addition */
}
