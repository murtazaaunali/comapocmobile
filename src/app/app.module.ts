import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { AccountsPage } from '../pages/accounts/accounts';
import { ActivitiesPage }  from '../pages/activities/activities';
import { CalendarPage } from '../pages/calendar/calendar';
import { ContactsPage } from '../pages/contacts/contacts';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { OpportunitiesPage } from '../pages/opportunities/opportunities';

import { ContactsFilterModalPage } from "../pages/contacts-filter-modal/contacts-filter-modal";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactServiceProvider } from '../providers/contact-service/contact-service';

@NgModule({
  declarations: [
    MyApp,
    AccountsPage,
    ActivitiesPage,
    CalendarPage,
    ContactsPage,
    DashboardPage,
    OpportunitiesPage,
    ContactsFilterModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountsPage,
    ActivitiesPage,
    CalendarPage,
    ContactsPage,
    DashboardPage,
    OpportunitiesPage,
    ContactsFilterModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactServiceProvider
  ]
})
export class AppModule {}
