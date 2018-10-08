import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { SmartsyncServiceProvider } from "../../providers/smartsync-service/smartsync-service";


@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  loader;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public smartSyncService: SmartsyncServiceProvider) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
  }

  SyncData() {
    this.smartSyncService.SyncContacts().then(response => {
      console.log("Contacts Sync Response:" + response.progress);
      this.smartSyncService.SyncOpportunities().then(response2 => {
        console.log("Opportinity Sync Response:" + response2.progress); 
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
