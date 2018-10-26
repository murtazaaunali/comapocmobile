import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContactTab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-tab2',
  templateUrl: 'contact-tab2.html',
})
export class ContactTab2Page {

  isHidden1;
  isHidden2;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isHidden1=this.isHidden2=true;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactTab2Page');
  }

}
