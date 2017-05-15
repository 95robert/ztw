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
var router_1 = require("@angular/router");
var authentication_service_1 = require("../services/authentication.service");
var user_1 = require("../models/user");
var LoginComponent = (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
        this.user = new user_1.User(0, '', '');
        this.httpLoginStatusMessage = '';
        this.httpLoginStatusError = false;
        this.httpRegisterStatusMessage = '';
        this.httpRegisterStatusError = false;
        this.newUser = { login: '', email: '', password1: '', password2: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.httpLoginStatusError = false;
        this.httpLoginStatusMessage = 'Logging in ...';
        this.service.login(this.user.login, this.user.password).then(function (res) {
            if (res.ok) {
                _this.httpLoginStatusError = false;
                _this.httpLoginStatusMessage = 'Logged in succesfully <md-icon></md-icon>';
                setTimeout(function () {
                    _this.router.navigate(['/home']);
                }, 3000);
            }
            else {
                _this.httpLoginStatusError = true;
                _this.httpLoginStatusMessage = 'Could not log in: ' + res.error_msg;
            }
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        this.httpRegisterStatusError = false;
        this.httpRegisterStatusMessage = 'Registration ...';
        this.service.register(this.newUser.login, this.newUser.email, this.newUser.password1, this.newUser.password2).then(function (res) {
            if (res.ok) {
                _this.httpRegisterStatusError = false;
                _this.httpRegisterStatusMessage = 'Registered succesfully! Logging in...';
                setTimeout(function () {
                    _this.router.navigate(['/home']);
                }, 1000);
            }
            else {
                _this.httpRegisterStatusError = true;
                _this.httpRegisterStatusMessage = 'Could not register: ' + res.error_msg;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        providers: [authentication_service_1.AuthenticationService],
        template: "\n        <md-card>\n            <md-tab-group>\n                <md-tab i18n-label label=\"Login\">\n                    <div class=\"tab-container\">\n                        <md-card-title i18n>Login</md-card-title>\n                        <md-input-container>\n                            <input [(ngModel)]=\"user.login\" mdInput i18n-placeholder placeholder=\"Username\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"user.password\" mdInput type=\"password\" i18n-placeholder placeholder=\"Password\">\n                        </md-input-container>\n                        <br />\n                        <button md-raised-button (click)=\"login()\" i18n>Logg in</button>\n                        <span *ngIf=\"httpLoginStatusMessage\" [ngClass]=\"{'error': httpLoginStatusError}\"\n                              [innerHTML]=\"httpLoginStatusMessage\" class=\"http-status\"></span>\n                    </div>\n                </md-tab>                \n                <md-tab i18n-label label=\"Registration\">\n                    <div class=\"tab-container\">\n                        <md-card-title i18n>Registration</md-card-title>\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.login\" mdInput i18n-placeholder placeholder=\"User name\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.email\" mdInput i18n-placeholder placeholder=\"E-mail\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.password1\" mdInput i18n-placeholder type=\"password\" placeholder=\"Password\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.password2\" mdInput i18n-placeholder type=\"password\" placeholder=\"Repeat password\">\n                        </md-input-container>\n                        <br />\n                        <button md-raised-button (click)=\"register()\" i18n>Register</button>\n                        <span *ngIf=\"httpRegisterStatusMessage\" [ngClass]=\"{'error': httpRegisterStatusError}\"\n                              [innerHTML]=\"httpRegisterStatusMessage\" class=\"http-status\"></span>\n                    </div>\n                </md-tab>\n            </md-tab-group>\n        </md-card>\n    ",
        styles: ["\n        @media screen and (min-width: 768px) {\n            md-card {\n                margin: 15px;\n            }\n        }\n        md-card { padding: 0; }\n        .tab-container { padding: 20px; }\n        .http-status {\n            padding: 5px;\n            font-weight: 500;\n        }\n        .http-status.error {\n            color: #ff0000;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map