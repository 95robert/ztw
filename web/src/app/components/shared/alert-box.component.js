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
 * Created by akselon on 2017-04-14.
 */
var core_1 = require("@angular/core");
var AlertBoxComponent = (function () {
    function AlertBoxComponent() {
        this.alertType = 'info';
        this.message = '';
        this.disableClose = false;
    }
    return AlertBoxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AlertBoxComponent.prototype, "alertType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AlertBoxComponent.prototype, "message", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AlertBoxComponent.prototype, "disableClose", void 0);
AlertBoxComponent = __decorate([
    core_1.Component({
        selector: 'alert-box',
        template: "\n        <md-card class=\"alert {{alertType}}\">\n            <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\" *ngIf=\"!disableClose\">&times;</span>\n            <span [ngSwitch]=\"alertType\">\n                <md-icon *ngSwitchCase=\"'danger'\">error</md-icon>\n                <md-icon *ngSwitchCase=\"'warning'\">warning</md-icon>\n                <md-icon *ngSwitchCase=\"'success'\">check</md-icon>\n                <md-icon *ngSwitchDefault>info</md-icon>\n            </span>\n            {{message}}\n        </md-card>",
        styles: ["\n        .alert {\n            color: white;\n            margin-bottom: 15px;\n        }\n        md-icon {\n            margin-right: 14px;\n            vertical-align: bottom;    \n            color: black;\n            opacity: 0.4;\n            margin-bottom: -2px;\n        }\n        .closebtn {\n            margin-left: 15px;\n            color: white;\n            font-weight: bold;\n            float: right;\n            font-size: 22px;\n            line-height: 20px;\n            cursor: pointer;\n            transition: 0.3s;\n        }\n        .closebtn:hover { color: black; }\n        .info { background-color: #2196f3;}\n        .danger { background-color: #ef5350;}\n        .warning { background-color: #ffb74d;}\n        .success { background-color: #8bc34a;}\n    "]
    })
], AlertBoxComponent);
exports.AlertBoxComponent = AlertBoxComponent;
//# sourceMappingURL=alert-box.component.js.map