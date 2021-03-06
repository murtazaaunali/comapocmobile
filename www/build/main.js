webpackJsonp([13],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NamefilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], AccountsPage);
    return AccountsPage;
}());

//# sourceMappingURL=accounts.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ActivitiesPage);
    return ActivitiesPage;
}());

//# sourceMappingURL=activities.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_forcejs__ = __webpack_require__(88);
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
    ContactServiceProvider.prototype.setContactId = function (id) {
        this.contactId = id;
    };
    ContactServiceProvider.prototype.getContactId = function () {
        return this.contactId;
    };
    ContactServiceProvider.prototype.loadContacts = function () {
        return this.service.query('SELECT Id, Name, Account.Name, Department, Role__c, Role_DLH__c, Other_Department__c, Job_Title__c, Other_Job_Title__c, Email, MobilePhone, Fax, Survey__c, RecordType.Name, CreatedBy.Name, CreatedById, CreatedDate, Owner.Name FROM Contact LIMIT 10');
    };
    ContactServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ContactServiceProvider);
    return ContactServiceProvider;
}());

//# sourceMappingURL=contact-service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs_dist__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs_dist_components_super_tabs__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, superTabsCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.superTabsCtrl = superTabsCtrl;
        this.page1 = 'ContactTab1Page';
        this.page2 = 'ContactTab2Page';
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs_dist_components_super_tabs__["a" /* SuperTabsComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs_dist_components_super_tabs__["a" /* SuperTabsComponent */])
    ], ContactPage.prototype, "superTabs", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <super-tabs selectedTabIndex="0" [config]="{ sideMenu: \'left\' }" height="100%" width="100%">\n    <super-tab [root]="page1"  title="Details">\n    </super-tab>\n    <super-tab [root]="page2"  title="Related">\n    </super-tab>\n  </super-tabs>\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic2_super_tabs_dist__["a" /* SuperTabsController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_service_contact_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_smartstore_service_smartstore_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_namefilter_namefilter__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_animations__ = __webpack_require__(140);
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
    function ContactsPage(navCtrl, navParams, contactsService, modalCtrl, loadingCtrl, filterCtrl, smartStoreService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactsService = contactsService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.filterCtrl = filterCtrl;
        this.smartStoreService = smartStoreService;
        this.contacts = [];
        this.searchFilter = '';
        this.temp = [];
        this.segments = "grid";
        this.page = 1;
        this.totalPages = 0;
        this.showSlider = false;
        this.filter = {
            Name: '',
            Job_Title__c: '',
            Department: '',
            Phone: '',
            MobilePhone: '',
            Email: '',
        };
        // Settings for Ng2Table
        this.settings = {
            pager: {
                display: true,
                perPage: 12
            },
            columns: {
                Name: {
                    title: 'Name',
                    filter: false
                },
                Job_Title__c: {
                    title: 'Job Title',
                    filter: false
                },
                Department: {
                    title: 'Department',
                    filter: false
                },
                Email: {
                    title: 'Email',
                    sort: false,
                    filter: false
                },
                Phone: {
                    title: 'Phone',
                    sort: false,
                    filter: false
                },
                MobilePhone: {
                    title: 'Mobile',
                    sort: false,
                    filter: false
                }
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            }
        };
        this.skeleton = true;
        this.items = [];
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.segments = "grid";
        this.GetAllContacts();
    }
    ContactsPage.prototype.OpenFiltersSlider = function () {
        this.showSlider = true;
        //let filterModal = this.modalCtrl.create(ContactsFilterModalPage);
        //filterModal.present();
    };
    ContactsPage.prototype.CloseFiltersSlider = function () {
        this.showSlider = false;
    };
    ContactsPage.prototype.onSegmentChange = function (ev) {
        if (this.segments == 'list') {
            this.GetAllContactsList();
        }
        else {
            this.GetAllContacts();
        }
    };
    ContactsPage.prototype.AddNewContactModal = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__new_contact_new_contact__["a" /* NewContactPage */]);
    };
    ContactsPage.prototype.SearchContact = function (filters) {
        var _this = this;
        this.loader.present();
        this.smartStoreService.GetContactsByFilterFromSoup(filters).then(function (data) {
            _this.contacts = data;
            _this.loader.dismiss();
        });
    };
    ContactsPage.prototype.GotoContactDetail = function (ev, id) {
        if (this.segments == 'list') {
            console.log(ev.data);
            this.contactsService.setContactId(ev.data.id);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */]);
        }
        else {
            console.log(id);
            this.contactsService.setContactId(id);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contact_contact__["a" /* ContactPage */]);
        }
    };
    ContactsPage.prototype.GetAllContacts = function () {
        var _this = this;
        // this.loader.present();
        this.skeleton = true;
        this.smartStoreService.GetContactsFromSoup().then(function (data) {
            _this.totalPages = data.records.length / 9;
            for (var i = 0; i < 9; i++) {
                _this.contacts.push(data.records[i]);
            }
            setTimeout(function () {
                _this.rows = _this.contacts;
                _this.temp = _this.rows;
                _this.skeleton = false;
            }, 1500);
            // this.loader.dismiss();
        });
    };
    ContactsPage.prototype.GetAllContactsList = function () {
        var _this = this;
        this.loader.present();
        this.smartStoreService.GetContactsFromSoup().then(function (data) {
            _this.rows = new __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__["a" /* LocalDataSource */](data.records);
            _this.contact_list = data.records;
            _this.loader.dismiss();
        });
    };
    ContactsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.smartStoreService.GetContactsFromSoup().then(function (data) {
            var start_num = 9 * _this.page;
            setTimeout(function () {
                for (var i = 0; i < 9; i++) {
                    _this.contacts.push(data.records[Number(start_num) + i]);
                }
                infiniteScroll.complete();
            }, 500);
        });
        this.page = this.page + 1;
    };
    ContactsPage.prototype.FilterTableRows = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        this.temp = this.rows.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = this.temp;
    };
    ContactsPage.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        if (query == '') {
            this.rows = new __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__["a" /* LocalDataSource */](this.contact_list);
        }
        else {
            this.rows.setFilter([
                // fields we want to include in the search
                {
                    field: 'Name',
                    search: query
                },
                {
                    field: 'Job_Title__c',
                    search: query
                },
                {
                    field: 'Department',
                    search: query
                },
                {
                    field: 'Email',
                    search: query
                },
                {
                    field: 'Phone',
                    search: query
                },
                {
                    field: 'MobilePhone',
                    search: query
                }
            ], false);
        }
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contacts',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contacts/contacts.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CONTACTS</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col col-2 style="padding-left: 10px">\n        <button block style="background:transparent;" (click)="OpenFiltersSilder()">\n          <img style="vertical-align: bottom" src="assets/imgs/filter.png" />\n          <div class="subheader-icon-txt">Filters</div>\n        </button>\n      </ion-col>\n      <ion-col col-2 style="padding-left: 10px">\n        <button block style="background:transparent;" (click)="AddNewContactModal()">\n          <img style="vertical-align: bottom" src="assets/imgs/new.png" />\n          <div class="subheader-icon-txt">New</div>\n        </button>\n      </ion-col>\n      <ion-col col-2>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item class="item-has-input search-filter" *ngIf="segments==\'grid\'">\n          <ion-input clearInput type="text" [(ngModel)]="searchFilter" text-left placeholder="Search Contact"></ion-input>\n          <ion-label item-right class="align-right label-img">\n            <ion-icon name="search"></ion-icon>\n          </ion-label>\n        </ion-item>\n        <ion-item class="item-has-input search-filter" *ngIf="segments==\'list\'">\n          <!-- <ion-input clearInput type="text" (keyup)=\'FilterTableRows($event)\' text-left placeholder="Search Contact"></ion-input> -->\n          <ion-input clearInput type="text" [(ngModel)]="searchFilter" (keydown)="onSearch(searchFilter)" text-left\n            placeholder="Search Contact"></ion-input>\n          <ion-label item-right class="align-right label-img">\n            <ion-icon name="search"></ion-icon>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2>\n        <div padding>\n          <ion-segment [(ngModel)]="segments" color="primary" (ionChange)="onSegmentChange($event)">\n            <ion-segment-button value="grid">\n              Grid\n            </ion-segment-button>\n            <ion-segment-button value="list">\n              List\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <div *ngIf="showSlider" swipeAll [@fadeInOut] (swipeup)="CloseSlider()" class="slider">\n\n      <div>\n        <ion-icon name="ios-close-outline" class="close-btn" (click)="CloseFiltersSlider()"></ion-icon>\n\n      </div>\n<div>\n  <ion-list>\n    <ion-row>\n<ion-col>\n<ion-item class="item-has-input filter-input">\n<ion-input clearInput type="text" text-left [(ngModel)]="filter.firstName" placeholder="Search by first name" ></ion-input>\n</ion-item>\n</ion-col>\n<ion-col>\n<ion-item class="item-has-input filter-input">\n<ion-input clearInput type="text" text-left [(ngModel)]="filter.lastName" placeholder="Search by last name"></ion-input>\n</ion-item>\n</ion-col>\n</ion-row>\n\n<ion-row>\n<ion-col>\n<ion-item class="item-has-input filter-input">\n<ion-input clearInput type="text" text-left [(ngModel)]="filter.jobTitle" placeholder="Search by job title" ></ion-input>\n</ion-item>\n</ion-col>\n<ion-col>\n<ion-item class="item-has-input filter-input">\n<ion-input clearInput type="text" text-left [(ngModel)]="filter.department" placeholder="Search by department"></ion-input>\n</ion-item>\n</ion-col>\n</ion-row>\n\n<ion-row>\n<ion-col>\n<ion-item class="item-has-input filter-input">\n<ion-input clearInput type="text" text-left [(ngModel)]="filter.email" placeholder="Search by email" ></ion-input>\n</ion-item>\n</ion-col>\n<ion-col>\n<ion-item class="item-has-input filter-input">\n<ion-input clearInput type="text" text-left [(ngModel)]="filter.accountName" placeholder="Search by account name"></ion-input>\n</ion-item>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col>\n  <ion-item>\n    <button ion-button class="btn-login search-btn center" round (click)="FilterContact()">SEARCH</button>\n  </ion-item>\n</ion-col>\n</ion-row>\n  </ion-list>\n\n</div>\n</div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="segments">\n    <!-- Data Grid -->\n    <div *ngSwitchCase="\'grid\'">\n      <ion-grid>\n        <ion-row *ngIf="skeleton == true">\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-md-4 *ngFor="let con of contacts| nameFilter:searchFilter" style="margin-top: -15px;">\n            <ion-card (click)="GotoContactDetail($event,con.Id)"  style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <h2 class="contact-name">{{con.Name}}</h2>\n              </ion-card-header>\n              <ion-card-content style="margin-top: -10px">\n                <ion-row>\n                  <ion-col col-12 *ngIf="con.Job_Title__c!=null">\n                    <ion-icon name="briefcase" class="icon-blue"></ion-icon><span class="contacts-content">{{con.Job_Title__c}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="con.Job_Title__c==null">\n                    <ion-icon name="briefcase" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="con.Department!=null">\n                    <ion-icon name="pin" class="icon-blue"></ion-icon><span class="contacts-content">{{con.Department}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="con.Department==null">\n                    <ion-icon name="pin" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="con.Email!=null">\n                    <ion-icon name="mail" class="icon-blue"></ion-icon><span class="contacts-content">{{con.Email}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="con.Email==null">\n                    <ion-icon name="mail" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="con.Phone!=null">\n                    <ion-icon name="call" class="icon-blue"></ion-icon><span class="contacts-content">{{con.Phone}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="con.Phone==null">\n                    <ion-icon name="call" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="con.MobilePhone!=null">\n                    <ion-icon name="phone-portrait" class="icon-blue"></ion-icon><span class="contacts-content">{{con.MobilePhone}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="con.MobilePhone==null">\n                    <ion-icon name="phone-portrait" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite($event))" *ngIf="page < totalPages" position="bottom">\n          <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Updating..."></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-grid>\n    </div>\n    <!-- Data Grid -->\n    <div *ngSwitchCase="\'list\'">\n      <div>\n        <ng2-smart-table [settings]="settings" [source]="rows" (userRowSelect)="GotoContactDetail($event,\'\')"></ng2-smart-table>\n      </div>\n      \n    </div>\n    <!-- DataTables -->\n  </div>\n</ion-content>'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contacts/contacts.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__pipes_namefilter_namefilter__["a" /* NamefilterPipe */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["i" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["g" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["g" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["e" /* animate */])(300, Object(__WEBPACK_IMPORTED_MODULE_9__angular_animations__["g" /* style */])({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_service_contact_service__["a" /* ContactServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__pipes_namefilter_namefilter__["a" /* NamefilterPipe */], __WEBPACK_IMPORTED_MODULE_3__providers_smartstore_service_smartstore_service__["a" /* SmartstoreServiceProvider */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_smartsync_service_smartsync_service__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, loadingCtrl, smartSyncService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.smartSyncService = smartSyncService;
        this.loader = this.loadingCtrl.create({
            content: "<div><h2>Syncing...</h2><p>Please wait, it will take few seconds to sync your whole data</p></div>",
        });
    }
    DashboardPage.prototype.SyncData = function () {
        var _this = this;
        this.loader.present();
        this.smartSyncService.SyncContacts().then(function (response) {
            console.log("Contacts Sync Response:" + response.progress);
            _this.smartSyncService.SyncOpportunities().then(function (response2) {
                console.log("Opportinity Sync Response:" + response2.progress);
                _this.loader.dismiss();
            });
        });
    };
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons end>\n      <button ion-button round item-right (click)="SyncData()">\n        <ion-icon name="sync"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_smartsync_service_smartsync_service__["a" /* SmartsyncServiceProvider */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_smartstore_service_smartstore_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_namefilter_namefilter__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__ = __webpack_require__(137);
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
    function OpportunitiesPage(navCtrl, navParams, loadingCtrl, filterCtrl, smartStoreService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.filterCtrl = filterCtrl;
        this.smartStoreService = smartStoreService;
        this.opportunities = [];
        this.searchFilter = '';
        this.segments = "grid";
        this.page = 1;
        this.totalPages = 0;
        this.skeleton = true;
        // Settings for Ng2Table
        this.settings = {
            pager: {
                display: true,
                perPage: 12
            },
            columns: {
                Name: {
                    title: 'Name',
                    filter: false
                },
                Opportunity_Type_ED_or_CC__c: {
                    title: 'Opportunity Type',
                    filter: false
                },
                AccountName: {
                    title: 'Account Name',
                    filter: false
                },
                StageName: {
                    title: 'Stage Name',
                    filter: false
                },
                Priority_Opportunity__c: {
                    title: 'Priority Opportunity',
                    filter: false
                },
                Probability: {
                    title: 'Probability',
                    filter: false
                },
                Departments__c: {
                    title: 'Departments',
                    filter: false
                },
                CloseDate: {
                    title: 'Close Date',
                    filter: false
                }
            },
            actions: {
                add: false,
                edit: false,
                delete: false
            }
        };
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.segments = "grid";
        this.GetAllOpportunities();
    }
    OpportunitiesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OpportunitiesPage');
    };
    OpportunitiesPage.prototype.onSegmentChange = function (ev) {
        if (this.segments == 'list') {
            this.GetAllOpportunitiesList();
        }
        else {
            this.GetAllOpportunities();
        }
    };
    OpportunitiesPage.prototype.GetAllOpportunities = function () {
        var _this = this;
        // this.loader.present();
        this.skeleton = true;
        this.smartStoreService.GetOpportunitiesFromSoup().then(function (data) {
            _this.totalPages = data.records.length / 9;
            for (var i = 0; i < 9; i++) {
                _this.opportunities.push(data.records[i]);
            }
            setTimeout(function () {
                _this.rows = _this.opportunities;
                _this.skeleton = false;
            }, 1500);
            // this.loader.dismiss();
        });
    };
    OpportunitiesPage.prototype.GetAllOpportunitiesList = function () {
        var _this = this;
        this.loader.present();
        this.smartStoreService.GetOpportunitiesFromSoup().then(function (data) {
            _this.rows = new __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__["a" /* LocalDataSource */](data.records);
            _this.loader.dismiss();
        });
    };
    OpportunitiesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.smartStoreService.GetOpportunitiesFromSoup().then(function (data) {
            var start_num = 9 * _this.page;
            setTimeout(function () {
                for (var i = 0; i < 9; i++) {
                    _this.opportunities.push(data.records[Number(start_num) + i]);
                }
                infiniteScroll.complete();
            }, 500);
        });
        this.page = this.page + 1;
    };
    OpportunitiesPage.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        if (query == '') {
            this.rows = new __WEBPACK_IMPORTED_MODULE_4_ng2_smart_table__["a" /* LocalDataSource */](this.opportunities);
        }
        else {
            this.rows.setFilter([
                // fields we want to include in the search
                {
                    field: 'Name',
                    search: query
                },
                {
                    field: 'Opportunity_Type_ED_or_CC__c',
                    search: query
                },
                {
                    field: 'AccountName',
                    search: query
                },
                {
                    field: 'StageName',
                    search: query
                },
                {
                    field: 'Priority_Opportunity__c',
                    search: query
                },
                {
                    field: 'Departments__c',
                    search: query
                }
            ], false);
        }
    };
    OpportunitiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-opportunities',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/opportunities/opportunities.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>OPPORTUNITIES</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-row>\n      <!-- <ion-col col-2 style="padding-left: 10px">\n        <button block style="background:transparent;" (click)="OpenFiltersModal()">\n          <img style="vertical-align: bottom" src="assets/imgs/filter.png" />\n          <div class="subheader-icon-txt">Filters</div>\n        </button>\n      </ion-col> -->\n      <!-- <ion-col col-2 style="padding-left: 10px">\n        <button block style="background:transparent;" (click)="AddNewContactModal()">\n          <img style="vertical-align: bottom" src="assets/imgs/new.png" />\n          <div class="subheader-icon-txt">New</div>\n        </button>\n      </ion-col> -->\n      <!-- <ion-col col-2>\n      </ion-col> -->\n      <ion-col col-4>\n        <ion-item class="item-has-input search-filter" *ngIf="segments==\'grid\'">\n          <ion-input clearInput type="text" [(ngModel)]="searchFilter" text-left placeholder="Search Opportunity"></ion-input>\n          <ion-label item-right class="align-right label-img">\n            <ion-icon name="search"></ion-icon>\n          </ion-label>\n        </ion-item>\n        <ion-item class="item-has-input search-filter" *ngIf="segments==\'list\'">\n          <ion-input clearInput type="text" [(ngModel)]="searchFilter" (keydown)="onSearch(searchFilter)" text-left\n            placeholder="Search Contact"></ion-input>\n          <ion-label item-right class="align-right label-img">\n            <ion-icon name="search"></ion-icon>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col col-2>\n        <div padding>\n          <ion-segment [(ngModel)]="segments" color="primary" (ionChange)="onSegmentChange($event)">\n            <ion-segment-button value="grid">\n              Grid\n            </ion-segment-button>\n            <ion-segment-button value="list">\n              List\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="segments">\n    <!-- Data Grid -->\n    <div *ngSwitchCase="\'grid\'">\n      <ion-grid>\n        <ion-row *ngIf="skeleton == true">\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n          <ion-col col-md-4>\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <skeleton-item height="15px"></skeleton-item>\n              </ion-card-header>\n              <ion-card-content>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12>\n                    <skeleton-item height="10px"></skeleton-item>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-md-4 *ngFor="let opp of opportunities| nameFilter:searchFilter" style="margin-top: -15px;">\n            <ion-card style=" min-height: 155px!important;max-height: 155px">\n              <ion-card-header>\n                <h2 class="contact-name">{{opp.Name}}</h2>\n              </ion-card-header>\n              <ion-card-content style="margin-top: -10px">\n                <ion-row>\n                  <ion-col col-12 *ngIf="opp.Opportunity_Type_ED_or_CC__c!=null">\n                    <ion-icon name="paper" class="icon-blue"></ion-icon><span class="contacts-content">{{opp.Opportunity_Type_ED_or_CC__c}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="opp.Opportunity_Type_ED_or_CC__c==null">\n                    <ion-icon name="paper" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="opp.AccountName!=null">\n                    <ion-icon name="person" class="icon-blue"></ion-icon><span class="contacts-content">{{opp.AccountName}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="opp.AccountName==null">\n                    <ion-icon name="person" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="opp.StageName!=null">\n                    <ion-icon name="trending_up" class="icon-blue"></ion-icon><span class="contacts-content">{{opp.StageName}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="opp.StageName==null">\n                    <ion-icon name="trending_up" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="opp.Priority_Opportunity__c!=null">\n                    <ion-icon name="ribbon" class="icon-blue"></ion-icon><span class="contacts-content">{{opp.Priority_Opportunity__c}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="opp.Priority_Opportunity__c==null">\n                    <ion-icon name="ribbon" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="opp.Departments__c!=null">\n                    <ion-icon name="pin" class="icon-blue"></ion-icon><span class="contacts-content">{{opp.Departments__c}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="opp.Departments__c==null">\n                    <ion-icon name="pin" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-12 *ngIf="opp.CloseDate!=null">\n                    <ion-icon name="calendar" class="icon-blue"></ion-icon><span class="contacts-content">{{opp.CloseDate}}</span>\n                  </ion-col>\n                  <ion-col col-12 *ngIf="opp.CloseDate==null">\n                    <ion-icon name="calendar" class="icon-blue"></ion-icon><span class="contacts-content">N/A</span>\n                  </ion-col>\n                </ion-row>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n        <ion-infinite-scroll (ionInfinite)="$event.waitFor(doInfinite($event))" *ngIf="page < totalPages" position="bottom">\n          <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Updating..."></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-grid>\n    </div>\n    <!-- Data Grid -->\n    <!-- DataTables -->\n    <div *ngSwitchCase="\'list\'">\n      <div>\n        <ng2-smart-table [settings]="settings" [source]="rows"></ng2-smart-table>\n      </div>\n\n\n      <!-- DataTables -->\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/opportunities/opportunities.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__pipes_namefilter_namefilter__["a" /* NamefilterPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__pipes_namefilter_namefilter__["a" /* NamefilterPipe */], __WEBPACK_IMPORTED_MODULE_2__providers_smartstore_service_smartstore_service__["a" /* SmartstoreServiceProvider */]])
    ], OpportunitiesPage);
    return OpportunitiesPage;
}());

//# sourceMappingURL=opportunities.js.map

/***/ }),

/***/ 205:
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
webpackEmptyAsyncContext.id = 205;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/accounts/accounts.module": [
		550,
		12
	],
	"../pages/activities/activities.module": [
		551,
		11
	],
	"../pages/calendar/calendar.module": [
		552,
		10
	],
	"../pages/contact-tab1/contact-tab1.module": [
		553,
		1
	],
	"../pages/contact-tab2/contact-tab2.module": [
		554,
		0
	],
	"../pages/contact/contact.module": [
		555,
		9
	],
	"../pages/contacts-filter-modal/contacts-filter-modal.module": [
		556,
		8
	],
	"../pages/contacts/contacts.module": [
		557,
		7
	],
	"../pages/dashboard/dashboard.module": [
		558,
		6
	],
	"../pages/help/help.module": [
		559,
		5
	],
	"../pages/new-contact/new-contact.module": [
		560,
		4
	],
	"../pages/opportunities/opportunities.module": [
		561,
		3
	],
	"../pages/settings/settings.module": [
		562,
		2
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
webpackAsyncContext.id = 248;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartsyncServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SmartsyncServiceProvider = /** @class */ (function () {
    function SmartsyncServiceProvider() {
        this.storeName = 'usersync';
        var storeConfig = {
            storeName: this.storeName,
            isGlobalStore: true
        };
    }
    // Initialize Smart Sync
    SmartsyncServiceProvider.prototype.smartSync = function () {
        return cordova.require("com.salesforce.plugin.smartsync");
    };
    // Sync Contacts
    SmartsyncServiceProvider.prototype.SyncContacts = function () {
        var _this = this;
        var target = { type: "soql", query: "SELECT Id, Name, Account.Name, Department, Role__c, Role_DLH__c, Other_Department__c, Job_Title__c, Other_Job_Title__c, Email, MobilePhone, Fax, Survey__c, RecordType.Name, CreatedBy.Name, CreatedById, CreatedDate, Owner.Name FROM Contact LIMIT 1000" };
        return new Promise(function (resolve, reject) {
            _this.smartSync().syncDown(target, "contacts", { mergeMode: 'LEAVE_IF_CHANGED' }, function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    // Sync Accounts
    SmartsyncServiceProvider.prototype.SyncAccounts = function () {
        var _this = this;
        var target = { type: "soql", query: "SELECT Id, Name, AHA_Number__c, IDN__c, GPO_Name__c, ShippingAddress, Latitude__c, Longitude__c, Record_Type__c, Parent.Name,  Owner.Name, Abbott_Account_ID__c FROM Account LIMIT 1000" };
        return new Promise(function (resolve, reject) {
            _this.smartSync().syncDown(target, "accounts", { mergeMode: 'LEAVE_IF_CHANGED' }, function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    // Sync Opportunities
    SmartsyncServiceProvider.prototype.SyncOpportunities = function () {
        var _this = this;
        var target = { type: "soql", query: "SELECT Id, Name, Owner.Name, Account.Name, Opportunity_Type_ED_or_CC__c, Priority_Opportunity__c, EETerritoryAssigned__c, Departments__c, Competitor__c, CloseDate, Close_Date_Reviewed__c, Projected_Go_Live_Date__c, Actual_Capital_Ship_Date__c, Run_Rate_Achieved_Date__c, Projected_Implementation_Start_Date__c, Self_Implementation__c, Marketing_Program__c, StageName, Probability, Confidence__c, Opportunity_Cartridge_Amount__c, Total_Cartridge_Volume__c, Opportunity_Equipment_Software_Amount__c, Forecast_Dollar_Contribution__c, Cartridges_text__c, i_STATs_Currently_Interfaced__c, RT_Has_Own_CLIA_License__c, Hospital_System__c, GPO__c, RecordType.Name FROM Opportunity" };
        return new Promise(function (resolve, reject) {
            _this.smartSync().syncDown(target, "opportunities", { mergeMode: 'LEAVE_IF_CHANGED' }, function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    SmartsyncServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SmartsyncServiceProvider);
    return SmartsyncServiceProvider;
}());

//# sourceMappingURL=smartsync-service.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsFilterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
            selector: 'page-contacts-filter-modal',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contacts-filter-modal/contacts-filter-modal.html"*/'<!--\n  Generated template for the ContactsFilterModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title style="padding-left: 10px">\n      <img src="../../assets/imgs/filter.png" />\n      <h2 class="inline-label">Filters</h2>\n    </ion-title>\n    <ion-buttons end>\n      <button class="close-btn" ion-button icon-only (click)="closeModal()">\n        <ion-icon item-right name="ios-close-outline"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-row>\n      <!-- <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.firstName" placeholder="Search by first name"></ion-input>\n        </ion-item>\n      </ion-col> -->\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.Name" placeholder="Search by Name"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.JobTitle__c" placeholder="Search by Job Title"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.Department" placeholder="Search by Department"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.Phone" placeholder="Search by Phone Number"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.MobilePhone" placeholder="Search by Mobile Number"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.Email" placeholder="Search by Email"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item class="item-has-input filter-input">\n          <ion-input clearInput type="text" text-left [(ngModel)]="filter.Account.Name" placeholder="Search by Account Name"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <button ion-button class="btn-login" round (click)="FilterContact()">SEARCH</button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contacts-filter-modal/contacts-filter-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ContactsFilterModalPage);
    return ContactsFilterModalPage;
}());

//# sourceMappingURL=contacts-filter-modal.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], NewContactPage);
    return NewContactPage;
}());

//# sourceMappingURL=new-contact.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-help',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/help/help.html"*/'<!--\n  Generated template for the HelpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>help</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/help/help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(427);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_completer__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_accounts_accounts__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_activities_activities__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_calendar_calendar__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contacts_contacts__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_opportunities_opportunities__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_contacts_filter_modal_contacts_filter_modal__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_namefilter_namefilter__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_smartstore_service_smartstore_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_contact_service_contact_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_account_service_account_service__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_opportunities_service_opportunities_service__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_smartsync_service_smartsync_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_skeleton_item_skeleton_item__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic_swipe_all__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ionic2_super_tabs__ = __webpack_require__(249);
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
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_opportunities_opportunities__["a" /* OpportunitiesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contacts_filter_modal_contacts_filter_modal__["a" /* ContactsFilterModalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_namefilter_namefilter__["a" /* NamefilterPipe */],
                __WEBPACK_IMPORTED_MODULE_24__components_skeleton_item_skeleton_item__["a" /* SkeletonItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_completer__["b" /* Ng2CompleterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_25_ionic_swipe_all__["a" /* IonicSwipeAllModule */],
                __WEBPACK_IMPORTED_MODULE_26_ionic2_super_tabs__["b" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/accounts/accounts.module#AccountsPageModule', name: 'AccountsPage', segment: 'accounts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities.module#ActivitiesPageModule', name: 'ActivitiesPage', segment: 'activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-tab1/contact-tab1.module#ContactTab1PageModule', name: 'ContactTab1Page', segment: 'contact-tab1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-tab2/contact-tab2.module#ContactTab2PageModule', name: 'ContactTab2Page', segment: 'contact-tab2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts-filter-modal/contacts-filter-modal.module#ContactsFilterModalPageModule', name: 'ContactsFilterModalPage', segment: 'contacts-filter-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-contact/new-contact.module#NewContactPageModule', name: 'NewContactPage', segment: 'new-contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opportunities/opportunities.module#OpportunitiesPageModule', name: 'OpportunitiesPage', segment: 'opportunities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            exports: [__WEBPACK_IMPORTED_MODULE_18__pipes_namefilter_namefilter__["a" /* NamefilterPipe */], __WEBPACK_IMPORTED_MODULE_24__components_skeleton_item_skeleton_item__["a" /* SkeletonItemComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_accounts_accounts__["a" /* AccountsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_activities_activities__["a" /* ActivitiesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_opportunities_opportunities__["a" /* OpportunitiesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_contacts_filter_modal_contacts_filter_modal__["a" /* ContactsFilterModalPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_contact_service_contact_service__["a" /* ContactServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_smartstore_service_smartstore_service__["a" /* SmartstoreServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_account_service_account_service__["a" /* AccountServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_opportunities_service_opportunities_service__["a" /* OpportunitiesServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_smartsync_service_smartsync_service__["a" /* SmartsyncServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_forcejs__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_forcejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_forcejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_accounts_accounts__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_calendar_calendar__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contacts_contacts__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_help_help__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_opportunities_opportunities__ = __webpack_require__(170);
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
        this.oauth = __WEBPACK_IMPORTED_MODULE_4_forcejs__["OAuth"].createInstance();
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: 'dashboard-icon.png' },
            { title: 'Accounts', component: __WEBPACK_IMPORTED_MODULE_5__pages_accounts_accounts__["a" /* AccountsPage */], icon: 'accounts-icon.png' },
            { title: 'Contacts', component: __WEBPACK_IMPORTED_MODULE_8__pages_contacts_contacts__["a" /* ContactsPage */], icon: 'contacts-icon.png' },
            { title: 'Opportunities', component: __WEBPACK_IMPORTED_MODULE_12__pages_opportunities_opportunities__["a" /* OpportunitiesPage */], icon: 'opportunities-icon.png' },
            { title: 'Activities', component: __WEBPACK_IMPORTED_MODULE_6__pages_activities_activities__["a" /* ActivitiesPage */], icon: 'activities-icon.png' },
            { title: 'Calendar', component: __WEBPACK_IMPORTED_MODULE_7__pages_calendar_calendar__["a" /* CalendarPage */], icon: 'calendar-icon.png' }
        ];
        this.settings = [
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_10__pages_settings_settings__["a" /* SettingsPage */], icon: 'settings-icon.png' },
            { title: 'Help', component: __WEBPACK_IMPORTED_MODULE_11__pages_help_help__["a" /* HelpPage */], icon: 'help-icon.png' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.oauth.login("3MVG9Iu66FKeHhINkB1l7xt7kR8czFcCTUhgoA8Ol2Ltf1eYHOU4SqQRSEitYFDUpqRWcoQ2.dBv_a1Dyu5xa")
            .then(function (oauthData) {
            console.log("Oauth Data: " + JSON.parse(oauthData));
            __WEBPACK_IMPORTED_MODULE_4_forcejs__["DataService"].createInstance(oauthData, { proxyURL: "https://apoc--stage.cs15.my.salesforce.com/" });
        });
        this.platform.ready().then(function () {
            _this.statusBar.styleLightContent();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.logoutApp = function () {
        this.oauth.refreshAccessToken();
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-content>\n    <ion-list>\n      <ion-item class="profile-section">\n        <img src="assets/imgs/default-profile-inner.png" class="profile-image">\n        <h1 class="username">{{username}}</h1>\n        <h5 class="instance">APOC - Stage</h5>\n      </ion-item>\n      <button ion-item detail-none block menuClose *ngFor="let p of pages" (click)="openPage(p.component)">\n        <ion-img src="assets/imgs/{{p.icon}}" class="menu-icon"></ion-img>\n        <div class="text-menu-btn">{{ p.title }}</div>\n      </button>\n    </ion-list>\n    <ion-list>\n      <ion-item-group>\n        <ion-item-divider color="light"></ion-item-divider>\n        <button ion-item detail-none block menuClose *ngFor="let s of settings" (click)="openPage(s.component)">\n          <ion-img src="assets/imgs/{{s.icon}}" class="menu-icon"></ion-img>\n          <div class="text-menu-btn"> {{ s.title }}</div>\n        </button>\n        <button ion-item detail-none block menuClose (click)="logoutApp()">\n          <ion-img src="assets/imgs/logout-icon.png" class="menu-icon"></ion-img>\n          <div class="text-menu-btn">Log out</div>\n        </button>\n      </ion-item-group>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n  </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_forcejs__ = __webpack_require__(88);
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



var AccountServiceProvider = /** @class */ (function () {
    function AccountServiceProvider() {
        this.service = __WEBPACK_IMPORTED_MODULE_2_forcejs__["DataService"].getInstance();
    }
    AccountServiceProvider.prototype.loadAccounts = function () {
        return this.service.query('SELECT Id, Name, AHA_Number__c, IDN__c, GPO_Name__c, ShippingAddress, Lattitude__c, Longitude__c, Record_Type__c, Parent, Abbott_AccountID__c, CreatedBy.Name, CreatedById, CreatedDate, Owner.Name FROM Account');
    };
    AccountServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AccountServiceProvider);
    return AccountServiceProvider;
}());

//# sourceMappingURL=account-service.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpportunitiesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_forcejs__ = __webpack_require__(88);
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



/*
  Generated class for the OpportunitiesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OpportunitiesServiceProvider = /** @class */ (function () {
    function OpportunitiesServiceProvider() {
        this.service = __WEBPACK_IMPORTED_MODULE_2_forcejs__["DataService"].getInstance();
    }
    OpportunitiesServiceProvider.prototype.loadAccounts = function () {
        return this.service.query('SELECT Id, Name, Owner, Account, Opportunity_Type_ED_or_CC__c, Priority_Opportunity__c, EETerritoryAssigned__c, Departments__c, Competitor__c, CloseDate, Close_Date_Reviewed__c, Projected_Go_Live_Date__c, Actual_Capital_Ship_Date__c, Run_Rate_Achieved_Date__c, Projected_Implementation_Start_Date__c, Self_Implementation__c, Marketing_Program__c, StageName, Probability, Confidence__c, Opportunity_Cartridge_Amount__c, Total_Cartridge_Volume__c, Opportunity_Equipment_Software_Amount__c, Forecast_Dollar_Contribution__c, Cartridges_text__c, i_STATs_Currently_Interfaced__c, RT_Has_Own_CLIA_License__c, Hospital_System__c, GPO__c, RecordType, CreatedBy.Name, CreatedById, CreatedDate, Owner.Name FROM Opportunity');
    };
    OpportunitiesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], OpportunitiesServiceProvider);
    return OpportunitiesServiceProvider;
}());

//# sourceMappingURL=opportunities-service.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkeletonItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkeletonItemComponent = /** @class */ (function () {
    function SkeletonItemComponent() {
        this.styles = {};
    }
    SkeletonItemComponent.prototype.ngOnInit = function () {
        this.styles = {
            width: this.width ? this.width : '100%',
            height: this.height ? this.height : '16px'
        };
        if (typeof this.radius !== 'undefined' && this.radius !== '') {
            this.styles.borderRadius = this.radius;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SkeletonItemComponent.prototype, "radius", void 0);
    SkeletonItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'skeleton-item',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/components/skeleton-item/skeleton-item.html"*/'<div [ngStyle]="styles"></div>'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/components/skeleton-item/skeleton-item.html"*/
        })
    ], SkeletonItemComponent);
    return SkeletonItemComponent;
}());

//# sourceMappingURL=skeleton-item.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartstoreServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
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
    function SmartstoreServiceProvider() {
        // Soup name predefined
        this.storeName = 'userstore';
        var storeConfig = {
            storeName: this.storeName,
            isGlobalStore: true
        };
    }
    // Initialize Smart Store
    SmartstoreServiceProvider.prototype.smartStore = function () {
        return cordova.require("com.salesforce.plugin.smartstore");
    };
    SmartstoreServiceProvider.prototype.GetContactsFromSoup = function () {
        return new Promise(function (resolve, reject) {
            var querySpec = navigator.smartstore.buildAllQuerySpec('Name', 'ascending', 10000);
            var success = function (results) { return resolve({ records: results.currentPageOrderedEntries }); };
            navigator.smartstore.querySoup('contacts', querySpec, success, reject);
        });
    };
    SmartstoreServiceProvider.prototype.GetContactsByFilterFromSoup = function (filters) {
        console.log(filters);
        return new Promise(function (resolve, reject) {
            var querySpec = navigator.smartstore.buildAllQuerySpec(filters, 'ascending', 10000);
            console.log('QuerySpecs: ' + querySpec);
            var success = function (results) { return resolve({ records: results.currentPageOrderedEntries }); };
            navigator.smartstore.querySoup('contacts', querySpec, success, reject);
        });
    };
    SmartstoreServiceProvider.prototype.GetContactsByIDFromSoup = function (id) {
        return new Promise(function (resolve, reject) {
            var querySpec = navigator.smartstore.buildExactQuerySpec('Id', id);
            console.log('QuerySpecs: ' + querySpec);
            var success = function (results) { return resolve({ records: results.currentPageOrderedEntries }); };
            navigator.smartstore.querySoup('contacts', querySpec, success, reject);
        });
    };
    SmartstoreServiceProvider.prototype.GetOpportunitiesFromSoup = function () {
        return new Promise(function (resolve, reject) {
            var querySpec = navigator.smartstore.buildAllQuerySpec('Name', 'ascending', 10000);
            var success = function (results) { return resolve({ records: results.currentPageOrderedEntries }); };
            navigator.smartstore.querySoup('opportunities', querySpec, success, reject);
        });
    };
    SmartstoreServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SmartstoreServiceProvider);
    return SmartstoreServiceProvider;
}());

//# sourceMappingURL=smartstore-service.js.map

/***/ })

},[306]);
//# sourceMappingURL=main.js.map