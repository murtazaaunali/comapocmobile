import { Component,Input } from '@angular/core';
import { IonicPage, NavController,LoadingController, NavParams } from 'ionic-angular';
import { ContactServiceProvider } from "../../providers/contact-service/contact-service";
import { SmartstoreServiceProvider } from "../../providers/smartstore-service/smartstore-service";

/**
 * Generated class for the ContactTab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-tab1',
  templateUrl: 'contact-tab1.html',
})
export class ContactTab1Page {
  loader;
  contact;
  contId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public contactsService: ContactServiceProvider,public loadingCtrl: LoadingController, public smartStoreService: SmartstoreServiceProvider) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.contId=this.contactsService.getContactId();
    this.GetParticularContact(this.contId);
   
  }

  GetParticularContact(id) {
    this.loader.present();
      this.smartStoreService.GetContactsFromSoup().then(data => {
        for(var con=0;con<data.records.length;con++){
          if(data.records[con].id==id){
            this.contact = data.records[con];
            console.log(this.contact);
            this.loader.dismiss();
          }
        }
        
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactTab1Page');
  }

}
