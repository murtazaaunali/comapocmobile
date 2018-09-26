import { Component, OnInit } from '@angular/core';
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
export class ContactsPage implements OnInit {
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
  }

  OpenFiltersModal() {
    let filterModal = this.modalCtrl.create(ContactsFilterModalPage, { searchContacts: this.SearchContact.bind(this) });
    filterModal.present();
  }

  AddNewContactModal() {
    this.navCtrl.push(NewContactPage);
  }

  SearchContact(filters) {
    this.loader.present();
    this.contactsService.searchFilteredContacts(filters, this.contacts).then(data => {
      this.contacts = data;
      this.loader.dismiss();
    });
  }


  ngOnInit() {
    this.loader.present();
    this.smartStoreService.GetContactsFromSoup().then(data => {
      this.contacts = data.records;
      this.loader.dismiss();
    });
  }

}
