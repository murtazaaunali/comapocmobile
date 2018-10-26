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
      content: "<div><h2>Syncing...</h2><p>Please wait, it will take few seconds to sync your whole data</p></div>",
    });
    
  }

  SyncData() {
    this.loader.present();
    this.smartSyncService.SyncContacts().then(response => {
      console.log("Contacts Sync Response:" + response.progress);
      this.smartSyncService.SyncOpportunities().then(response2 => {
        console.log("Opportinity Sync Response:" + response2.progress); 
        this.loader.dismiss();
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

}
