import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs/dist';
import {SuperTabs} from "Ionic2-super-tabs/dist/components/super-tabs";

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
  page1: any = 'ContactTab1Page';
  page2: any = 'ContactTab2Page';
  private contactId;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contactId = this.navParams.get("contactId");
      console.log(this.contactId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
