import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, LoadingController, NavParams } from 'ionic-angular';

import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { SmartstoreServiceProvider } from "../../providers/smartstore-service/smartstore-service";

import { ContactsFilterModalPage } from "../contacts-filter-modal/contacts-filter-modal";
import { NewContactPage } from "../new-contact/new-contact";
import { NamefilterPipe } from '../../pipes/namefilter/namefilter';


@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
  providers: [NamefilterPipe]
})
export class ContactsPage {
  contacts: any;
  searchFilter = '';
  loader;
  contactsSegment: string = "grid";
  public columns: any;
  public rows: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactsService: ContactServiceProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public filterCtrl: NamefilterPipe, public smartStoreService: SmartstoreServiceProvider) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });

    this.columns = [
      { prop: 'Name' },
      { name: 'Job Title' },
      { name: 'Department' },
      { name: 'Account' },
      { name: 'Email' },
      { name: 'Mobile' },
      { name: 'Phone' },
      { name: 'Fax' },
      { pipe: 'nameFilter:searchFilter' }
    ];
  }

  OpenFiltersModal() {
    let filterModal = this.modalCtrl.create(ContactsFilterModalPage, { searchContacts: this.SearchContact.bind(this) });
    filterModal.present();
  }

  AddNewContactModal() {
    this.navCtrl.push(NewContactPage);
  }

  SearchContact(filters) {
    console.log(filters);
    this.loader.present();
    this.contactsService.searchFilteredContacts(filters, this.contacts).then(data => {
      this.contacts = data;
      this.loader.dismiss();
    });
  }


  ionViewDidLoad() {
    this.loader.present();
    this.smartStoreService.GetContactsFromSoup().then(data => {
      console.log('Count Records:' + data.records.length);
      this.contacts = data.records;
      this.rows = data.records;
      this.loader.dismiss();
    });
  }

}
