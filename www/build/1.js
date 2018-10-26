webpackJsonp([1],{

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactTab1PageModule", function() { return ContactTab1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_tab1__ = __webpack_require__(563);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactTab1PageModule = /** @class */ (function () {
    function ContactTab1PageModule() {
    }
    ContactTab1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_tab1__["a" /* ContactTab1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_tab1__["a" /* ContactTab1Page */]),
            ],
        })
    ], ContactTab1PageModule);
    return ContactTab1PageModule;
}());

//# sourceMappingURL=contact-tab1.module.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactTab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_service_contact_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_smartstore_service_smartstore_service__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactTab1Page = /** @class */ (function () {
    function ContactTab1Page(navCtrl, navParams, contactsService, loadingCtrl, smartStoreService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactsService = contactsService;
        this.loadingCtrl = loadingCtrl;
        this.smartStoreService = smartStoreService;
        this.contact = this.contact = {
            "CreatedById": "",
            "Job_Title__c": "",
            "Role__c": "",
            "RecordType": {
                "Name": ""
            },
            "Survey__c": "",
            "_soupLastModifiedDate": "",
            "Owner": {
                "Name": ""
            },
            "CreatedBy": {
                "Name": ""
            },
            "Name": "",
            "Fax": "",
            "CreatedDate": "",
            "Other_Department__c": "",
            "__local__": "",
            "LastModifiedDate": "",
            "Account": {
                "Name": ""
            },
            "__locally_created__": "",
            "__sync_id__": "1",
            "Email": "",
            "Id": "",
            "__locally_deleted__": "",
            "MobilePhone": "",
            "Other_Job_Title__c": "",
            "_soupEntryId": "",
            "__locally_updated__": "",
            "Role_DLH__c": "",
            "Department": ""
        };
        this.loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.contId = this.contactsService.getContactId();
        this.GetParticularContact();
    }
    ContactTab1Page.prototype.GetParticularContact = function () {
        var _this = this;
        console.log("GetParticularContact");
        this.smartStoreService.GetContactsByIDFromSoup(this.contId).then(function (data) {
            _this.contact = data.records[0];
            console.log("Contact Details:" + JSON.stringify(_this.contact));
        });
    };
    ContactTab1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactTab1Page');
    };
    ContactTab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-tab1',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contact-tab1/contact-tab1.html"*/'\n<ion-content padding >\n  <div class="contact-name-detail">\n    <div style="height:10px"></div>\n    <span style="display: inline-block;">\n      <img class="contact-name-icon" src="..AQ/../assets/imgs/new.png"/>\n    </span>\n    <span style="display: inline-block;">\n      <h1 style="line-height: 0.5;">{{contact.Name}}</h1>\n      <!-- <p>msdnsd</p> -->\n    </span>\n  </div>\n    <ion-list>\n        <ion-row style="margin-top:10px">\n        <ion-col col-50>\n          <ion-item style="background: none!important;">\n            <ion-label fixed>Account Name:</ion-label>\n            <ion-input type="text" [(ngModel)]="contact.Account.Name"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-50>\n          <ion-item style="background: none!important;">\n            <ion-label fixed>Department:</ion-label>\n            <ion-input type="text" [(ngModel)]="contact.Department"></ion-input>\n          </ion-item>\n        </ion-col>\n        \n        </ion-row>\n        <ion-row>\n            <ion-col col-50>\n                <ion-item style="background: none!important;">\n                  <ion-label fixed>Role</ion-label>\n                  <ion-input type="text" [(ngModel)]="contact.Role__c"></ion-input>\n                </ion-item>\n              </ion-col>\n            <ion-col col-50>\n              <ion-item style="background: none!important;">\n                <ion-label fixed>Job Title:</ion-label>\n                <ion-input type="text" [(ngModel)]="contact.Other_Job_Title__c"></ion-input>\n              </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-50>\n              <ion-item style="background: none!important;">\n                <ion-label fixed>Email:</ion-label>\n                <ion-input type="text" [(ngModel)]="contact.Email"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-50>\n              <ion-item style="background: none!important;">\n                <ion-label fixed>Mobile:</ion-label>\n                <ion-input type="text" [(ngModel)]="contact.Mobile"></ion-input>\n              </ion-item>\n            </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-50>\n                  <ion-item style="background: none!important;">\n                    <ion-label fixed>Fax:</ion-label>\n                    <ion-input type="text" [(ngModel)]="contact.Fax"></ion-input>\n                  </ion-item>\n                </ion-col>\n                <ion-col col-50>\n                  <ion-item style="background: none!important;">\n                    <ion-label fixed>Survey:</ion-label>\n                    <ion-input type="text" [(ngModel)]="contact.Survey__c"></ion-input>\n                  </ion-item>\n                </ion-col>\n          \n                </ion-row>\n                <ion-row>\n                    <ion-col col-50>\n                        <ion-item style="background: none!important;">\n                          <ion-label fixed>Record Type:</ion-label>\n                          <ion-input type="text" [(ngModel)]="contact.RecordType.Name"></ion-input>\n                        </ion-item>\n                      </ion-col>\n                    <ion-col col-50>\n                      <ion-item style="background: none!important;">\n                        <ion-label fixed>Owner:</ion-label>\n                        <ion-input type="text" [(ngModel)]="contact.Owner.Name"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                  \n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-50>\n                            <ion-item style="background: none!important;">\n                              <ion-label fixed>Created By:</ion-label>\n                              <ion-input type="text" [(ngModel)]="contact.CreatedBy.Name"></ion-input>\n                            </ion-item>\n                          </ion-col>\n                    </ion-row>\n          </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contact-tab1/contact-tab1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_service_contact_service__["a" /* ContactServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_smartstore_service_smartstore_service__["a" /* SmartstoreServiceProvider */]])
    ], ContactTab1Page);
    return ContactTab1Page;
}());

//# sourceMappingURL=contact-tab1.js.map

/***/ })

});
//# sourceMappingURL=1.js.map