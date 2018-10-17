import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from "ng2-completer";


import { MyApp } from './app.component';
import { AccountsPage } from '../pages/accounts/accounts';
import { ActivitiesPage } from '../pages/activities/activities';
import { CalendarPage } from '../pages/calendar/calendar';
import { ContactsPage } from '../pages/contacts/contacts';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { OpportunitiesPage } from '../pages/opportunities/opportunities';
import { ContactPage } from '../pages/contact/contact';

import { ContactsFilterModalPage } from "../pages/contacts-filter-modal/contacts-filter-modal";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NamefilterPipe } from '../pipes/namefilter/namefilter';
import { SmartstoreServiceProvider } from '../providers/smartstore-service/smartstore-service';
import { ContactServiceProvider } from '../providers/contact-service/contact-service';
import { AccountServiceProvider } from '../providers/account-service/account-service';
import { OpportunitiesServiceProvider } from '../providers/opportunities-service/opportunities-service';
import { SmartsyncServiceProvider } from '../providers/smartsync-service/smartsync-service';

import { SkeletonItemComponent } from '../components/skeleton-item/skeleton-item'
import { IonicSwipeAllModule } from 'ionic-swipe-all';



@NgModule({
  declarations: [
    MyApp,
    AccountsPage,
    ActivitiesPage,
    CalendarPage,
    ContactsPage,
    DashboardPage,
    ContactPage,
    OpportunitiesPage,
    ContactsFilterModalPage,
    NamefilterPipe,
    SkeletonItemComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    Ng2SmartTableModule,
    Ng2CompleterModule,
    BrowserAnimationsModule,
    IonicSwipeAllModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  exports: [NamefilterPipe, SkeletonItemComponent],
  entryComponents: [
    MyApp,
    AccountsPage,
    ActivitiesPage,
    CalendarPage,
    ContactsPage,
    ContactPage,
    DashboardPage,
    OpportunitiesPage,
    ContactsFilterModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ContactServiceProvider,
    SmartstoreServiceProvider,
    AccountServiceProvider,
    OpportunitiesServiceProvider,
    SmartsyncServiceProvider
  ]
})
export class AppModule { }
