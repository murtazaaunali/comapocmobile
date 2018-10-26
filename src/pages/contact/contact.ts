import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabsController } from 'ionic2-super-tabs/dist';
import { SuperTabsComponent } from "ionic2-super-tabs/dist/components/super-tabs";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  @ViewChild(SuperTabsComponent) superTabs: SuperTabsComponent;
  page1: any = 'ContactTab1Page';
  page2: any = 'ContactTab2Page';

  constructor(public navCtrl: NavController, public navParams: NavParams, private superTabsCtrl: SuperTabsController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
