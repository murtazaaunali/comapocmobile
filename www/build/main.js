webpackJsonp([8],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_forcejs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_forcejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_forcejs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactServiceProvider = /** @class */ (function () {
    function ContactServiceProvider() {
        this.service = __WEBPACK_IMPORTED_MODULE_2_forcejs__["DataService"].getInstance();
    }
    ContactServiceProvider.prototype.loadContacts = function () {
        return this.service.query('SELECT Id, Name, Account.Name, Department, Role__c, Role_DLH__c, Other_Department__c, Job_Title__c, Other_Job_Title__c, Email, MobilePhone, Fax, Survey__c, RecordType.Name, CreatedBy.Name, CreatedById, CreatedDate, Owner.Name FROM Contact');
    };
    ContactServiceProvider.prototype.searchFilteredContacts = function (filters, contacts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.responseData = contacts.filter(function (el) {
                return (el.name.toLowerCase() == filters.firstName.toLowerCase() ||
                    el.job_title.toLowerCase() == filters.jobTitle.toLowerCase() ||
                    el.department.toLowerCase() == filters.department.toLowerCase() ||
                    el.phone == filters.phone ||
                    el.mobile == filters.mobile ||
                    el.email == filters.email ||
                    el.account_name.toLowerCase() == filters.accountName.toLowerCase());
            });
            console.log(_this.responseData);
            if (_this.responseData.length > 0) {
                resolve(_this.responseData);
            }
            else {
                console.log("No Contacts Found");
                reject([]);
            }
        });
    };
    ContactServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContactServiceProvider);
    return ContactServiceProvider;
}());

//# sourceMappingURL=contact-service.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AccountsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountsPage = /** @class */ (function () {
    function AccountsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountsPage');
    };
    AccountsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-accounts',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/accounts/accounts.html"*/'<!--\n  Generated template for the AccountsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>accounts</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/accounts/accounts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AccountsPage);
    return AccountsPage;
}());

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivitiesPage = /** @class */ (function () {
    function ActivitiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ActivitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivitiesPage');
    };
    ActivitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-activities',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/activities/activities.html"*/'<!--\n  Generated template for the ActivitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>activities</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/activities/activities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/calendar/calendar.html"*/'<!--\n  Generated template for the CalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>calendar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsFilterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactsFilterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsFilterModalPage = /** @class */ (function () {
    function ContactsFilterModalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filter = {
            firstName: '',
            lastName: '',
            jobTitle: '',
            department: '',
            phone: '',
            mobile: '',
            email: '',
            accountName: ''
        };
    }
    ContactsFilterModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsFilterModalPage');
    };
    ContactsFilterModalPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    ContactsFilterModalPage.prototype.FilterContact = function () {
        console.log(this.filter);
    };
    ContactsFilterModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contacts-filter-modal',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contacts-filter-modal/contacts-filter-modal.html"*/'<!--\n  Generated template for the ContactsFilterModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="padding-left: 10px">\n        <img src="../../assets/imgs/filter.png"/>\n        <h2 class="inline-label">Filters</h2>\n    </ion-title>\n    <ion-buttons end>\n      <button class="close-btn" ion-button icon-only (click)="closeModal()">\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n<ion-row>\n  <ion-col>\n    <ion-item class="item-has-input filter-input">\n      <ion-input clearInput type="text" text-left [(ngModel)]="filter.firstName" placeholder="Search by first name" ></ion-input>\n    </ion-item>\n  </ion-col>\n  <ion-col>\n    <ion-item class="item-has-input filter-input">\n      <ion-input clearInput type="text" text-left [(ngModel)]="filter.lastName" placeholder="Search by last name"></ion-input>\n    </ion-item>\n  </ion-col>\n</ion-row>\n<br>\n    <ion-row>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.jobTitle" placeholder="Search by job title" ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.department" placeholder="Search by department"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n<br>\n    <ion-row>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.phone" placeholder="Search by phone number" ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.mobile" placeholder="Search by mobile number"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n<br>\n    <ion-row>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.email" placeholder="Search by email" ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.accountName" placeholder="Search by account name"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n<br>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <button ion-button class="btn-login" round (click)="FilterContact()">SEARCH</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contacts-filter-modal/contacts-filter-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ContactsFilterModalPage);
    return ContactsFilterModalPage;
}());

//# sourceMappingURL=contacts-filter-modal.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_service_contact_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_filter_modal_contacts_filter_modal__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_namefilter_namefilter__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ContactsPage = /** @class */ (function () {
    function ContactsPage(navCtrl, navParams, contactsService, modalCtrl, loadingCtrl, filterCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactsService = contactsService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.filterCtrl = filterCtrl;
        this.searchFilter = '';
        this.contactsSegment = "grid";
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.columns = [
            { prop: 'Name' },
            { name: 'Job Title' },
            { name: 'Department' },
            { name: 'Account' },
            { name: 'Email' },
            { name: 'Mobile' },
            { name: 'Phone' },
            { name: 'Fax' },
            { pipe: 'nameFilter:searchFilter' }
        ];
        console.log(this.columns);
    }
    ContactsPage.prototype.OpenFiltersModal = function () {
        var filterModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__contacts_filter_modal_contacts_filter_modal__["a" /* ContactsFilterModalPage */], { searchContacts: this.SearchContact.bind(this) });
        filterModal.present();
    };
    ContactsPage.prototype.AddNewContactModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__["a" /* NewContactPage */]);
    };
    ContactsPage.prototype.SearchContact = function (filters) {
        var _this = this;
        console.log(filters);
        this.loader.present();
        this.contactsService.searchFilteredContacts(filters, this.contacts).then(function (data) {
            _this.contacts = data;
            _this.loader.dismiss();
        });
    };
    ContactsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ContactsPage');
        this.loader.present();
        this.contactsService.loadContacts().then(function (data) {
            _this.contacts = data.records;
            console.log(data.records);
            _this.rows = data.records;
            _this.loader.dismiss();
        });
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contacts',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contacts/contacts.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CONTACTS</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col col-2 style="padding-left: 10px">\n        <button block style="background:transparent;" (click)="OpenFiltersModal()">\n          <img src="../../assets/imgs/filter.png" />\n          <div class="subheader-icon-txt">Filters</div>\n        </button>\n      </ion-col>\n      <ion-col col-2 style="padding-left: 10px">\n        <button block style="background:transparent;" (click)="AddNewContactModal()">\n          <img src="../../assets/imgs/new.png" />\n          <div class="subheader-icon-txt">New</div>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item class="item-has-input search-filter">\n          <ion-input clearInput type="text" [(ngModel)]="searchFilter" text-left placeholder="Search Contact"></ion-input>\n          <ion-label item-right class="align-right label-img">\n            <ion-icon name="search"></ion-icon>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2>\n        <div padding>\n          <ion-segment [(ngModel)]="contactsSegment">\n            <ion-segment-button value="grid">\n              Grid\n            </ion-segment-button>\n            <ion-segment-button value="list">\n              List\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="contactsSegment">\n    <div *ngSwitchCase="\'grid\'">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-md-4 *ngFor="let con of contacts | nameFilter:searchFilter">\n            <ion-card>\n              <ion-card-header>\n                <h2><b>{{con.Name}}</b></h2>\n                <p><span>{{con.Job_Title__c }}</span><span *ngIf="con.Department!=null"> | {{con.Department}}</span></p>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12 *ngIf="con.Email!=null">\n                    <ion-icon name="mail"></ion-icon><span class="contacts-content">{{con.Email}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="con.Email==null">\n                    <ion-icon name="mail"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="con.Phone!=null">\n                    <ion-icon name="call"></ion-icon><span class="contacts-content">{{con.Phone}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="con.Phone==null">\n                    <ion-icon name="call"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="con.MobilePhone!=null">\n                    <ion-icon name="call"></ion-icon><span class="contacts-content">{{con.MobilePhone}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="con.MobilePhone==null">\n                    <ion-icon name="call"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div *ngSwitchCase="\'list\'">\n        <!-- <ngx-datatable\n        class="material"\n        [sortType]="\'multi\'"\n        [headerHeight]="50"\n        [footerHeight]="50"\n        [rowHeight]="50"\n        [rows]="rows"\n        [columns]="columns"\n        [columnMode]="\'flex\'"\n        [limit]="10">\n      </ngx-datatable> -->\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contacts/contacts.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__pipes_namefilter_namefilter__["a" /* NamefilterPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_service_contact_service__["a" /* ContactServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__pipes_namefilter_namefilter__["a" /* NamefilterPipe */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OpportunitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpportunitiesPage = /** @class */ (function () {
    function OpportunitiesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OpportunitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpportunitiesPage');
    };
    OpportunitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-opportunities',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/opportunities/opportunities.html"*/'<!--\n  Generated template for the OpportunitiesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>opportunities</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/opportunities/opportunities.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OpportunitiesPage);
    return OpportunitiesPage;
}());

//# sourceMappingURL=opportunities.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accounts/accounts.module": [
		683,
		7
	],
	"../pages/activities/activities.module": [
		684,
		6
	],
	"../pages/calendar/calendar.module": [
		685,
		5
	],
	"../pages/contacts-filter-modal/contacts-filter-modal.module": [
		686,
		4
	],
	"../pages/contacts/contacts.module": [
		687,
		3
	],
	"../pages/dashboard/dashboard.module": [
		688,
		2
	],
	"../pages/new-contact/new-contact.module": [
		689,
		1
	],
	"../pages/opportunities/opportunities.module": [
		690,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamefilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NamefilterPipe = /** @class */ (function () {
    function NamefilterPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    NamefilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter) {
            return items;
        }
        // To search values only of "name" variable of your object(item)
        //return items.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1);
        // To search in values of every variable of your object(item)
        return items.filter(function (item) { return JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) !== -1; });
    };
    NamefilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'nameFilter',
            pure: true
        })
    ], NamefilterPipe);
    return NamefilterPipe;
}());

//# sourceMappingURL=namefilter.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NewContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewContactPage = /** @class */ (function () {
    function NewContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewContactPage');
    };
    NewContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-contact',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/new-contact/new-contact.html"*/'<!--\n  Generated template for the NewContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>newContact</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/new-contact/new-contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NewContactPage);
    return NewContactPage;
}());

//# sourceMappingURL=new-contact.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_accounts_accounts__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_calendar_calendar__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contacts_contacts__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_opportunities_opportunities__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contacts_filter_modal_contacts_filter_modal__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_contact_service_contact_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_smartstore_service_smartstore_service__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_namefilter_namefilter__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_opportunities_opportunities__["a" /* OpportunitiesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contacts_filter_modal_contacts_filter_modal__["a" /* ContactsFilterModalPage */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_namefilter_namefilter__["a" /* NamefilterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/accounts/accounts.module#AccountsPageModule', name: 'AccountsPage', segment: 'accounts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts-filter-modal/contacts-filter-modal.module#ContactsFilterModalPageModule', name: 'ContactsFilterModalPage', segment: 'contacts-filter-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-contact/new-contact.module#NewContactPageModule', name: 'NewContactPage', segment: 'new-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opportunities/opportunities.module#OpportunitiesPageModule', name: 'OpportunitiesPage', segment: 'opportunities', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            exports: [__WEBPACK_IMPORTED_MODULE_16__pipes_namefilter_namefilter__["a" /* NamefilterPipe */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_opportunities_opportunities__["a" /* OpportunitiesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contacts_filter_modal_contacts_filter_modal__["a" /* ContactsFilterModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_contact_service_contact_service__["a" /* ContactServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_smartstore_service_smartstore_service__["a" /* SmartstoreServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_forcejs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_forcejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_forcejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_accounts_accounts__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_calendar_calendar__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contacts_contacts__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_opportunities_opportunities__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */];
        this.username = 'Akili Cooper';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: 'dashboard-icon.png' },
            { title: 'Accounts', component: __WEBPACK_IMPORTED_MODULE_5__pages_accounts_accounts__["a" /* AccountsPage */], icon: 'accounts-icon.png' },
            { title: 'Contacts', component: __WEBPACK_IMPORTED_MODULE_8__pages_contacts_contacts__["a" /* ContactsPage */], icon: 'contacts-icon.png' },
            { title: 'Opportunities', component: __WEBPACK_IMPORTED_MODULE_10__pages_opportunities_opportunities__["a" /* OpportunitiesPage */], icon: 'opportunities-icon.png' },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities__["a" /* ActivitiesPage */], icon: 'activities-icon.png' },
            { title: 'Calendar', component: __WEBPACK_IMPORTED_MODULE_7__pages_calendar_calendar__["a" /* CalendarPage */], icon: 'calendar-icon.png' }
        ];
        this.settings = [
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: 'settings-icon.png' },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_5__pages_accounts_accounts__["a" /* AccountsPage */], icon: 'help-icon.png' },
            { title: 'Log Out', component: __WEBPACK_IMPORTED_MODULE_8__pages_contacts_contacts__["a" /* ContactsPage */], icon: 'logout-icon.png' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        var oauth = __WEBPACK_IMPORTED_MODULE_4_forcejs__["OAuth"].createInstance();
        oauth.login("3MVG9Iu66FKeHhINkB1l7xt7kR8czFcCTUhgoA8Ol2Ltf1eYHOU4SqQRSEitYFDUpqRWcoQ2.dBv_a1Dyu5xa")
            .then(function (oauthData) {
            __WEBPACK_IMPORTED_MODULE_4_forcejs__["DataService"].createInstance(oauthData, { proxyURL: "https://apoc--stage.cs15.my.salesforce.com/" });
        });
        this.platform.ready().then(function () {
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/app/app.html"*/'<ion-menu [content]="content">\n<ion-content>\n    <ion-list>\n        <ion-item class="profile-section">\n            <img src="assets/imgs/default-profile-inner.png" class="profile-image">\n            <h1 class="username">{{username}}</h1>\n            <h5 class="instance">APOC - Stage</h5>\n          </ion-item>\n          <button ion-item detail-none block menuClose *ngFor="let p of pages" (click)="openPage(p.component)">\n              <ion-img src="assets/imgs/{{p.icon}}" class="menu-icon"></ion-img>\n              <div class="text-menu-btn">{{ p.title }}</div>\n            </button>\n    </ion-list>\n    <ion-list>\n        <ion-item-group>\n        <ion-item-divider color="light"></ion-item-divider>\n        <button ion-item detail-none block menuClose *ngFor="let s of settings" (click)="openPage(s.component)">\n          <ion-img src="assets/imgs/{{s.icon}}" class="menu-icon"></ion-img>\n          <div class="text-menu-btn"> {{ s.title }}</div>\n        </button>\n        </ion-item-group>\n      </ion-list>\n  </ion-content>\n  <ion-footer>\n      <ion-toolbar>\n        <ion-row align-items-center>\n          <ion-col>\n            {{ username }}\n          </ion-col>\n          <ion-col>\n            <button ion-button full clear icon-left (click)="logout()">\n              <ion-icon name="sign-out">\n              </ion-icon>\n              Logout\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-toolbar>\n    </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartstoreServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_service_contact_service__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SmartstoreServiceProvider = /** @class */ (function () {
    function SmartstoreServiceProvider(contactsService) {
        this.contactsService = contactsService;
        // Soup name predefined
        // private storeName = 'contactsApp'
        this.soupName = 'contacts';
        console.log('constructor');
        // const storeConfig = {
        //   storeName: this.storeName,
        //   isGlobalStore: true
        // };
        var contactsIndexSpecs = [
            { path: "Id", type: "string" },
            { path: "Name", type: "string" },
            { path: "Account", type: "string" },
            { path: "Department", type: "string" },
            { path: "Role__c", type: "string" },
            { path: "Role_DLH__c", type: "string" },
            { path: "Other_Department__c", type: "string" },
            { path: "Other_Job_Title__c", type: "string" },
            { path: "Email", type: "string" },
            { path: "Mobile", type: "string" },
            { path: "Fax", type: "string" },
            { path: "Survey__c", type: "string" },
            { path: "RecordType", type: "string" },
            { path: "CreatedBy", type: "string" },
            { path: "Owner", type: "string" },
            { path: "__local__", type: "string" },
            { path: "__locally_created__", type: "string" },
            { path: "__locally_updated__", type: "string" },
            { path: "__locally_deleted__", type: "string" }
        ];
        var accountsIndexSpecs = [
            { path: "Id", type: "string" },
            { path: "Name", type: "string" },
            { path: "Account", type: "string" },
            { path: "Department", type: "string" },
            { path: "Role__c", type: "string" },
            { path: "Role_DLH__c", type: "string" },
            { path: "Other_Department__c", type: "string" },
            { path: "Other_Job_Title__c", type: "string" },
            { path: "Email", type: "string" },
            { path: "MobilePhone", type: "string" },
            { path: "Fax", type: "string" },
            { path: "Survey__c", type: "string" },
            { path: "RecordType.Name", type: "string" },
            { path: "CreatedBy.Name", type: "string" },
            { path: "CreatedById", type: "string" },
            { path: "CreatedDate", type: "string" },
            { path: "Owner.Name", type: "string" },
            { path: "__local__", type: "string" },
            { path: "__locally_created__", type: "string" },
            { path: "__locally_updated__", type: "string" },
            { path: "__locally_deleted__", type: "string" }
        ];
        // let success = (soupName) => console.log('Soup ${soupName} was successfully created!');
        // let failure = (error) => console.error('Registering soup fails with error: ${error}');
        // if (!this.smartStore().soupExists(this.soupName)) {
        //   this.smartStore().registerSoup(this.soupName, indexSpecs, success, failure);
        // }
        // Registering Soups
        // if (!this.smartStore().soupExists('contacts')) {
        //   console.log('Dev Debug: Contacts Soup Not Found!');
        //   console.log('Dev Debug: Registering Contacts Soup');
        //   this.RegisterContactSoup('contacts', contactsIndexSpecs);
        //   console.log('Dev Debug: Registering Contacts Completed');
        //   console.log('Dev Debug: Trying to fill Contacts');
        //   this.FillContactsSoups();
        //   console.log('Dev Debug: Contacts filled');
        // }
        // if (!this.smartStore().soupExists('accounts')) {
        //   this.RegisterContactSoup('accounts', accountsIndexSpecs);
        // }
    }
    // Initialize Smart Store
    SmartstoreServiceProvider.prototype.smartStore = function () {
        return cordova.require("com.salesforce.plugin.smartstore");
    };
    SmartstoreServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contact_service_contact_service__["a" /* ContactServiceProvider */]])
    ], SmartstoreServiceProvider);
    return SmartstoreServiceProvider;
}());

//# sourceMappingURL=smartstore-service.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map