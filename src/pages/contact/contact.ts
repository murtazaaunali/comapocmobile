import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  private contactId;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contactId = this.navParams.get("contactId");
      console.log(this.contactId);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
