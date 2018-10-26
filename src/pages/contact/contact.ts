import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs/dist';
import { SuperTabs } from "Ionic2-super-tabs/dist/components/super-tabs";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  @ViewChild(SuperTabs) superTabs: SuperTabs;
  page1: any;
  page2: any;
  private contactId;

  constructor(public navCtrl: NavController, public navParams: NavParams, private superTabsCtrl: SuperTabsController) {
    console.log('Constructor');
    this.page1 = 'ContactTab1Page';
    this.page2 = 'ContactTab2Page';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
