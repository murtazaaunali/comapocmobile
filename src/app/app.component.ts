import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {OAuth, DataService} from 'forcejs';

import { AccountsPage } from '../pages/accounts/accounts';
import { ActivitiesPage } from '../pages/activities/activities';
import { CalendarPage } from '../pages/calendar/calendar';
import { ContactsPage } from '../pages/contacts/contacts';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { OpportunitiesPage } from '../pages/opportunities/opportunities';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any, icon: any}>;
  settings: Array<{title: string, component: any, icon: any}>;
  username = 'Akili Cooper';

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage, icon: 'dashboard-icon.png' },
      { title: 'Accounts', component: AccountsPage, icon: 'accounts-icon.png' },
      { title: 'Contacts', component: ContactsPage, icon: 'contacts-icon.png' },
      { title: 'Opportunities', component: OpportunitiesPage, icon: 'opportunities-icon.png' },
      { title: 'Activities', component: ActivitiesPage, icon: 'activities-icon.png' },
      { title: 'Calendar', component: CalendarPage, icon: 'calendar-icon.png' }
    ];
    this.settings = [
      { title: 'Settings', component: DashboardPage, icon: 'settings-icon.png' },
      { title: 'Help', component: AccountsPage, icon: 'help-icon.png' },
      { title: 'Log Out', component: ContactsPage, icon: 'logout-icon.png' }
    ];

  }

  initializeApp() {
    let oauth = OAuth.createInstance();
    oauth.login("3MVG9Iu66FKeHhINkB1l7xt7kR8czFcCTUhgoA8Ol2Ltf1eYHOU4SqQRSEitYFDUpqRWcoQ2.dBv_a1Dyu5xa")
      .then((oauthData) => {
      DataService.createInstance(oauthData, {proxyURL: "https://apoc--stage2.cs96.my.salesforce.com/"});
    });

    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
}
