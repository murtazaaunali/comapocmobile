webpackJsonp([0],{

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactTab2PageModule", function() { return ContactTab2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_tab2__ = __webpack_require__(564);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactTab2PageModule = /** @class */ (function () {
    function ContactTab2PageModule() {
    }
    ContactTab2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_tab2__["a" /* ContactTab2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_tab2__["a" /* ContactTab2Page */]),
            ],
        })
    ], ContactTab2PageModule);
    return ContactTab2PageModule;
}());

//# sourceMappingURL=contact-tab2.module.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactTab2Page; });
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
 * Generated class for the ContactTab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactTab2Page = /** @class */ (function () {
    function ContactTab2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isHidden1 = this.isHidden2 = true;
    }
    ContactTab2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactTab2Page');
    };
    ContactTab2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-tab2',template:/*ion-inline-start:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contact-tab2/contact-tab2.html"*/'<ion-content padding>\n  <div>\n    <button ion-button full outline class="contact-related-btn" (click)="isHidden1=!isHidden1">\n      <span class="contact-related-heading">\n        <img class="contact-related-item-icon" src="..AQ/../assets/imgs/contacts-icon.png" />\n        <h3 style="display:inline-block;text-transform: capitalize;">Contacts</h3>\n      </span>\n\n      <span class="contact-related-arrows">\n        <ion-icon name="arrow-down" style="font-size: 28px;" *ngIf="isHidden1"></ion-icon>\n        <ion-icon name="arrow-up" style="font-size: 28px;" *ngIf="!isHidden1"></ion-icon>\n      </span>\n\n    </button>\n    <ion-card [hidden]="isHidden1" class="contact-related-card">\n      <ion-card-content>\n        <!-- Add card content here! -->\n\n        <!-- Add card content here! -->\n        <table style="width:100%">\n          <tr>\n            <th>Company</th>\n            <th>Contact</th>\n            <th>Country</th>\n          </tr>\n          <tr>\n            <td>Alfreds Futterkiste</td>\n            <td>Maria Anders</td>\n            <td>Germany</td>\n          </tr>\n        </table>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n  <div>\n    <button ion-button full outline class="contact-related-btn" (click)="isHidden2=!isHidden2">\n      <span class="contact-related-heading">\n        <img class="contact-related-item-icon" src="..AQ/../assets/imgs/opportunities-icon.png" />\n        <h3 style="display:inline-block;text-transform: capitalize;">Opportunities</h3>\n      </span>\n\n      <span class="contact-related-arrows">\n        <ion-icon name="arrow-down" style="font-size: 28px;" *ngIf="isHidden2"></ion-icon>\n        <ion-icon name="arrow-up" style="font-size: 28px;" *ngIf="!isHidden2"></ion-icon>\n      </span>\n\n    </button>\n    <ion-card [hidden]="isHidden2" class="contact-related-card">\n      <ion-card-content>\n        <!-- Add card content here! -->\n        Just like a normal page, cards can be customized to include headers. To add a header to a card, add the\n        component inside of your card\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/private/var/root/Desktop/Hybrid/Salesforce/comapocmobile/src/pages/contact-tab2/contact-tab2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], ContactTab2Page);
    return ContactTab2Page;
}());

//# sourceMappingURL=contact-tab2.js.map

/***/ })

});
//# sourceMappingURL=0.js.map