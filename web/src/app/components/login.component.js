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
        this.httpStatusMessage = '';
        this.httpStatusError = false;
        this.newUser = { login: '', email: '', password1: '', password2: '' };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.httpStatusError = false;
        this.httpStatusMessage = 'Logowanie ...';
        this.service.login(this.user.login, this.user.password).then(function (res) {
            console.log(res);
            if (res.ok) {
                _this.httpStatusError = false;
                _this.httpStatusMessage = 'Zalogowano pomyślnie';
                setTimeout(function () {
                    _this.router.navigate(['/home']);
                }, 1000);
            }
            else {
                _this.httpStatusError = true;
                _this.httpStatusMessage = 'Nie udało się zalogować: ' + res.error_msg;
            }
        });
    };
    LoginComponent.prototype.register = function () {
        if (!this.service.register(this.newUser)) {
            this.httpStatusMessage = 'Failed to login';
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        providers: [authentication_service_1.AuthenticationService],
        template: "\n        <md-card>\n            <md-tab-group>\n                <md-tab label=\"Logowanie\">\n                    <div class=\"tab-container\">\n                        <alert-box [message]=\"'U\u017Cyj tych danych do logowania: test/test'\"></alert-box>\n                        <md-card-title>Logowanie</md-card-title>\n                        <md-input-container>\n                            <input [(ngModel)]=\"user.login\" mdInput placeholder=\"Nazwa u\u017Cytkownika\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"user.password\" mdInput type=\"password\" placeholder=\"Has\u0142o\" value=\"Sushi\">\n                        </md-input-container>\n                        <br />\n                        <button md-raised-button (click)=\"login()\">Zaloguj</button>\n                        <span *ngIf=\"httpStatusMessage\" [ngClass]=\"{'error': httpStatusError}\" [innerHTML]=\"httpStatusMessage\" class=\"http-status\"></span>\n                    </div>\n                </md-tab>\n                \n                <md-tab label=\"Rejestracja\">\n                    <div class=\"tab-container\">\n                        <md-card-title>Rejestracja</md-card-title>\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.login\" mdInput placeholder=\"Nazwa u\u017Cytkownika\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.email\" mdInput placeholder=\"Email\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.password1\" mdInput type=\"password\" placeholder=\"Has\u0142o\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input [(ngModel)]=\"newUser.password2\" mdInput type=\"password\" placeholder=\"Powt\u00F3rz haslo\">\n                        </md-input-container>\n                        <br />\n                        <button md-raised-button (click)=\"register()\">Zarejestruj</button>\n                    </div>\n                </md-tab>\n            </md-tab-group>\n        </md-card>\n    ",
        styles: ["\n        md-card { padding: 0; }\n        .tab-container { padding: 20px; }\n        .http-status {\n            padding: 5px;\n            font-weight: 500;\n        }\n        .http-status.error {\n            color: #ff0000;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map