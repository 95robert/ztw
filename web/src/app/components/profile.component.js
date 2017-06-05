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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var authentication_service_1 = require("../services/authentication.service");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var user_service_1 = require("../services/user.service");
var material_2 = require("@angular/material");
var ProfileComponent = (function () {
    function ProfileComponent(router, route, authService, userService, dialog) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.userService = userService;
        this.dialog = dialog;
        this.isLoading = true;
        this.showWarning = false;
        this.warningMessage = '';
    }
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (res) {
            _this.router.navigate(['/login']);
        });
    };
    ProfileComponent.prototype.saveChanges = function () {
        var _this = this;
        this.userService.saveChanges(this.user).then(function (result) {
            _this.dialog.open(ChangeSettingsDialog, {
                data: {
                    result: result,
                    message: ((result.ok) ? 'Your profile has been saved!' : 'Could not save the profile: ' + result.error_msg)
                }
            });
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserSettings()
            .then(function (user) {
            _this.user = user;
            _this.isLoading = false;
        })
            .catch(function (message) {
            _this.warningMessage = message;
            _this.showWarning = true;
            _this.isLoading = false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'login-form',
        providers: [authentication_service_1.AuthenticationService],
        templateUrl: './assets/profile.component.html',
        styleUrls: ['./assets/common.component.css'],
        styles: ["\n        md-input-container {display: block !important;}\n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        authentication_service_1.AuthenticationService,
        user_service_1.UserService,
        material_1.MdDialog])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
var ChangeSettingsDialog = (function () {
    function ChangeSettingsDialog(data) {
        this.data = data;
    }
    return ChangeSettingsDialog;
}());
ChangeSettingsDialog = __decorate([
    core_1.Component({
        selector: 'change-settings-dialog',
        templateUrl: './assets/change-settings-dialog.html',
    }),
    __param(0, core_1.Inject(material_2.MD_DIALOG_DATA)),
    __metadata("design:paramtypes", [Object])
], ChangeSettingsDialog);
exports.ChangeSettingsDialog = ChangeSettingsDialog;
//# sourceMappingURL=profile.component.js.map