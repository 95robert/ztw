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
var user_1 = require("../models/user");
var router_1 = require("@angular/router");
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
        this.httpLoginStatusMessage = 'Logowanie ...';
        this.service.login(this.user.login, this.user.password).then(function (res) {
            if (res.ok) {
                _this.httpLoginStatusError = false;
                _this.httpLoginStatusMessage = 'Zalogowano pomyślnie';
                setTimeout(function () {
                    _this.router.navigate(['/home']);
                }, 3000);
            }
            else {
                _this.httpLoginStatusError = true;
                _this.httpLoginStatusMessage = 'Nie udało się zalogować: ' + res.error_msg;
            }
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        this.httpRegisterStatusError = false;
        this.httpRegisterStatusMessage = 'Rejestracja ...';
        this.service.register(this.newUser.login, this.newUser.email, this.newUser.password1, this.newUser.password2).then(function (res) {
            console.log(res);
            if (res.ok) {
                _this.httpRegisterStatusError = false;
                _this.httpRegisterStatusMessage = 'Zarejestrowano i zalogowano pomyślnie';
                setTimeout(function () {
                    _this.router.navigate(['/home']);
                }, 1000);
            }
            else {
                _this.httpRegisterStatusError = true;
                _this.httpRegisterStatusMessage = 'Nie udało się zarejestrować: ' + res.error_msg;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        providers: [authentication_service_1.AuthenticationService],
        template: "\n        <md-card>\n            <md-tab-group>\n                <md-tab label=\"Logowanie\">\n                    <div class=\"tab-container\">\n                        <alert-box [message]=\"'U\u017Cyj tych danych do logowania: test/test'\"></alert-box>\n                        <md-card-title>Logowanie</md-card-title>\n                        <md-input-container>\n                            <input [(ngModel)]=\"user.login\" mdInput placeholder=\"Nazwa u\u017Cytkownika\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"user.password\" mdInput type=\"password\" placeholder=\"Has\u0142o\" value=\"Sushi\">\n                        </md-input-container>\n                        <br />\n                        <button md-raised-button (click)=\"login()\">Zaloguj</button>\n                        <span *ngIf=\"httpLoginStatusMessage\" [ngClass]=\"{'error': httpLoginStatusError}\" [innerHTML]=\"httpLoginStatusMessage\" class=\"http-status\"></span>\n                    </div>\n                </md-tab>\n                \n                <md-tab label=\"Rejestracja\">\n                    <div class=\"tab-container\">\n                        <md-card-title>Rejestracja</md-card-title>\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.login\" mdInput placeholder=\"Nazwa u\u017Cytkownika\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.email\" mdInput placeholder=\"Email\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.password1\" mdInput type=\"password\" placeholder=\"Has\u0142o\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.password2\" mdInput type=\"password\" placeholder=\"Powt\u00F3rz haslo\">\n                        </md-input-container>\n                        <br />\n                        <button md-raised-button (click)=\"register()\">Zarejestruj</button>\n                        <span *ngIf=\"httpRegisterStatusMessage\" [ngClass]=\"{'error': httpRegisterStatusError}\" [innerHTML]=\"httpRegisterStatusMessage\" class=\"http-status\"></span>\n                    </div>\n                </md-tab>\n            </md-tab-group>\n        </md-card>\n    ",
        styles: ["\n        md-card { padding: 0; }\n        .tab-container { padding: 20px; }\n        .http-status {\n            padding: 5px;\n            font-weight: 500;\n        }\n        .http-status.error {\n            color: #ff0000;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map