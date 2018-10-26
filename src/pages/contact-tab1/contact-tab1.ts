
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { SmartstoreServiceProvider } from "../../providers/smartstore-service/smartstore-service";


@IonicPage()
@Component({
  selector: 'page-contact-tab1',
  templateUrl: 'contact-tab1.html',
})
export class ContactTab1Page {
  loader;
  contact: any = this.contact = {
    "CreatedById": "",
    "Job_Title__c": "",
    "Role__c": "",
    "RecordType": {
      "Name": ""
    },
    "Survey__c": "",
    "_soupLastModifiedDate": "",
    "Owner": {
      "Name": ""
    },
    "CreatedBy": {
      "Name": ""
    },
    "Name": "",
    "Fax": "",
    "CreatedDate": "",
    "Other_Department__c": "",
    "__local__": "",
    "LastModifiedDate": "",
    "Account": {
      "Name": ""
    },
    "__locally_created__": "",
    "__sync_id__": "1",
    "Email": "",
    "Id": "",
    "__locally_deleted__": "",
    "MobilePhone": "",
    "Other_Job_Title__c": "",
    "_soupEntryId": "",
    "__locally_updated__": "",
    "Role_DLH__c": "",
    "Department": ""
  };
  contId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contactsService: ContactServiceProvider, public loadingCtrl: LoadingController, public smartStoreService: SmartstoreServiceProvider) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.contId = this.contactsService.getContactId();
    this.GetParticularContact();
  }

  GetParticularContact() {
    console.log("GetParticularContact");
    this.smartStoreService.GetContactsByIDFromSoup(this.contId).then(data => {
      this.contact = data.records[0];
      console.log("Contact Details:" + JSON.stringify(this.contact));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactTab1Page');
  }

}
