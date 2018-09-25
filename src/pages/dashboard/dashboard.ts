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
      console.log("Sync Response:" + response);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
