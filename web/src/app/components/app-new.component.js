"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by akselon on 2017-04-24.
 */
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Bettinger';
        this.menuShowed = false;
    }
    AppComponent.prototype.toggleMenu = function () {
        this.menuShowed = !this.menuShowed;
        console.log('menuShowed = ', this.menuShowed);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        // templateUrl: './assets/app.component.html',
        template: "\n        <nav>\n            <div id=\"nav-brand\">Bettinger</div>\n            <div id=\"nav-icon\" (click)=\"toggleMenu();\" [ngClass]=\"{'open': menuShowed}\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n            </div>\n        </nav>\n        <div id=\"btgr-menu\" [hidden]=\"!menuShowed\">\n            <ul>\n                <li class=\"info\">Menu</li>\n                <li><a href=\"#\">Strona g\u0142\u00F3wna</a></li>\n                <li><a href=\"#\">Typerzy</a></li>\n                <li><a href=\"#\">Nadchodz\u0105ce mecze</a></li>\n                <li class=\"spacer\"></li>\n                <li><a href=\"#\">M\u00F3j profil</a></li>\n                <li><a href=\"#\">Wyloguj</a></li>\n            </ul>\n        </div>\n    ",
        styles: ["\n        #btgr-menu {\n            width: 100%;\n            height: 100%;\n            background-color: #581845;\n            position: fixed;\n            text-align: center;\n            -webkit-transition: .5s ease-in-out;\n            -moz-transition: .5s ease-in-out;\n            -o-transition: .5s ease-in-out;\n            transition: .5s ease-in-out;\n            color: #FF5733;\n        }\n        #btgr-menu header {\n            font-size: 30px;\n            font-weight: 700;\n            color: #c70039;\n        }\n        ul {\n            list-style: none;\n            padding: 0;\n            position: relative;\n            top: 35%;\n            transform: perspective(1px) translateY(-50%);\n        }\n        li, li a {\n            font-size: 40px;\n            margin-bottom: 15px;\n            text-decoration: none;\n            color: #FF5733;\n        }\n        li a:hover {\n            color: #FFCC00;\n        }\n        li.spacer {\n            height: 40px;\n        }\n        li.info {\n            font-size: 30px;\n        }\n        nav {\n            display: block;\n            height: 45px;\n            padding: 15px;\n            background-color: #581845;\n            color: #FFC300;\n            font-family: \"proxima-nova-soft\", \"Proxima Nova Soft\", Helvetica, Arial, sans-serif;\n        }\n        #nav-brand {\n            font-size: 40px;\n            font-weight: 700;\n            left: 0;\n            float: left;\n        }\n        #nav-brand:after {\n             content: '';\n             display: block;\n             clear: both;\n         }\n        #nav-icon {\n            margin: 0;\n            float: right;\n            right: 0;\n            width: 60px;\n            height: 45px;\n            position: relative;\n            -webkit-transform: rotate(0deg);\n            -moz-transform: rotate(0deg);\n            -o-transform: rotate(0deg);\n            transform: rotate(0deg);\n            -webkit-transition: .5s ease-in-out;\n            -moz-transition: .5s ease-in-out;\n            -o-transition: .5s ease-in-out;\n            transition: .5s ease-in-out;\n            cursor: pointer;\n        }\n        #nav-icon span {\n            display: block;\n            position: absolute;\n            height: 9px;\n            width: 100%;\n            background: #FFC300;\n            border-radius: 9px;\n            opacity: 1;\n            left: 0;\n            -webkit-transform: rotate(0deg);\n            -moz-transform: rotate(0deg);\n            -o-transform: rotate(0deg);\n            transform: rotate(0deg);\n            -webkit-transition: .25s ease-in-out;\n            -moz-transition: .25s ease-in-out;\n            -o-transition: .25s ease-in-out;\n            transition: .25s ease-in-out;\n        }\n        #nav-icon span:nth-child(1) {\n            top: 0px;\n        }\n        #nav-icon span:nth-child(2),#nav-icon span:nth-child(3) {\n            top: 18px;\n        }\n        #nav-icon span:nth-child(4) {\n            top: 36px;\n        }\n        #nav-icon.open span:nth-child(1) {\n            top: 18px;\n            width: 0%;\n            left: 50%;\n        }\n        #nav-icon.open span:nth-child(2) {\n            -webkit-transform: rotate(45deg);\n            -moz-transform: rotate(45deg);\n            -o-transform: rotate(45deg);\n            transform: rotate(45deg);\n        }\n\n        #nav-icon.open span:nth-child(3) {\n            -webkit-transform: rotate(-45deg);\n            -moz-transform: rotate(-45deg);\n            -o-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n        }\n\n        #nav-icon.open span:nth-child(4) {\n            top: 18px;\n            width: 0%;\n            left: 50%;\n        }\n    "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app-new.component.js.map