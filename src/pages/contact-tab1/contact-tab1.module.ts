import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactTab1Page } from './contact-tab1';

@NgModule({
  declarations: [
    ContactTab1Page,
  ],
  imports: [
    IonicPageModule.forChild(ContactTab1Page),
  ],
})
export class ContactTab1PageModule {}
