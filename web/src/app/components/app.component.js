"use strict";
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
 * Created by akselon on 2017-04-24.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var AppComponent = (function () {
    function AppComponent(location, router) {
        var _this = this;
        this.location = location;
        this.title = 'Bettinger';
        this.locale = document['locale'];
        this.menuShowed = false;
        this.showBackLink = false;
        this.firstUrl = '';
        this.sub = router.events
            .filter(function (event) { return event instanceof router_1.NavigationStart; })
            .subscribe(function (e) {
            var url = e.url;
            if (_this.firstUrl === '') {
                _this.firstUrl = url;
            }
            else if (_this.firstUrl !== url) {
                _this.showBackLink = true;
                _this.sub.unsubscribe();
            }
        });
    }
    AppComponent.prototype.toggleMenu = function () {
        this.menuShowed = !this.menuShowed;
    };
    AppComponent.prototype.menuLinkClicked = function () {
        this.menuShowed = false;
    };
    AppComponent.prototype.menuLinkBack = function () {
        this.location.back();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './assets/app.component.html',
        styleUrls: ['./assets/app.component.css']
    }),
    __metadata("design:paramtypes", [common_1.Location,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map