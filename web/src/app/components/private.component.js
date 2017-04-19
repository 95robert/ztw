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
var core_1 = require("@angular/core");
var authentication_service_1 = require("../services/authentication.service");
var PrivateComponent = (function () {
    function PrivateComponent(service) {
        this.service = service;
    }
    PrivateComponent.prototype.logout = function () {
        this.service.logout();
    };
    return PrivateComponent;
}());
PrivateComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        providers: [authentication_service_1.AuthenticationService],
        template: "\n        <md-card>\n            <span>Oto strona dost\u0119pna tylko dla zalogowanych. Takich jak ty :)</span>\n            <br />\n            <br />\n            <br />\n            <button md-raised-button (click)=\"logout()\" >Wyloguj</button>\n        </md-card>\n    "
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], PrivateComponent);
exports.PrivateComponent = PrivateComponent;
//# sourceMappingURL=private.component.js.map