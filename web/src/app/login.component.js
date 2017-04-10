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
var authentication_service_1 = require("./authentication.service");
var LoginComponent = (function () {
    function LoginComponent(_service) {
        this._service = _service;
        this.user = new authentication_service_1.User('', '');
        this.errorMsg = '';
    }
    LoginComponent.prototype.login = function () {
        if (!this._service.login(this.user)) {
            this.errorMsg = 'Failed to login';
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        providers: [authentication_service_1.AuthenticationService],
        template: "\n        <div class=\"app-content\">\n            <md-card>\n                <md-tab-group>\n                    <md-tab label=\"Logowanie\">\n                        <md-card-title>Logowanie</md-card-title>\n                        <md-input-container>\n                            <input mdInput placeholder=\"Nazwa u\u017Cytkownika\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input mdInput type=\"password\" placeholder=\"Has\u0142o\" value=\"Sushi\">\n                        </md-input-container>\n                        <br />\n                        <button md-raised-button>Zaloguj</button></md-tab>\n                    <md-tab label=\"Rejestracja\">\n                        <md-card-title>Rejestracja</md-card-title>\n                        <md-input-container>\n                            <input mdInput placeholder=\"Nazwa u\u017Cytkownika\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input mdInput type=\"password\" placeholder=\"Has\u0142o\">\n                        </md-input-container>\n                        <br />\n                        <md-input-container>\n                            <input mdInput type=\"password\" placeholder=\"Powt\u00F3rz haslo\">\n                        </md-input-container>\n                        <br />\n                        <button md-raised-button>Zarejestruj</button>\n                    </md-tab>\n                </md-tab-group>\n            </md-card>\n        </div>\n        <!--<div class=\"container\" >-->\n            <!--<div class=\"title\">-->\n                <!--Welcome-->\n            <!--</div>-->\n            <!--<div class=\"panel-body\">-->\n                <!--<div class=\"row\">-->\n                    <!--<div class=\"input-field col s12\">-->\n                        <!--<input [(ngModel)]=\"user.email\" id=\"email\"-->\n                               <!--type=\"email\" class=\"validate\">-->\n                        <!--<label for=\"email\">Email</label>-->\n                    <!--</div>-->\n                <!--</div>-->\n\n                <!--<div class=\"row\">-->\n                    <!--<div class=\"input-field col s12\">-->\n                        <!--<input [(ngModel)]=\"user.password\" id=\"password\"-->\n                               <!--type=\"password\" class=\"validate\">-->\n                        <!--<label for=\"password\">Password</label>-->\n                    <!--</div>-->\n                <!--</div>-->\n\n                <!--<span>{{errorMsg}}</span>-->\n                <!--<button (click)=\"login()\"-->\n                        <!--class=\"btn waves-effect waves-light\"-->\n                        <!--type=\"submit\" name=\"action\">Login</button>-->\n            <!--</div>-->\n        <!--</div>-->\n    ",
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map