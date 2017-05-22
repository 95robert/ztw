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
 * Created by @akselon on 2017-05-08.
 */
var core_1 = require("@angular/core");
var tipster_1 = require("../../models/tipster");
var TipsterboxComponent = (function () {
    function TipsterboxComponent() {
        // Hides unusfull informations from template
        this.displayLess = true;
    }
    TipsterboxComponent.prototype.ngOnInit = function () {
        console.log(this.tipster);
    };
    return TipsterboxComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", tipster_1.Tipster)
], TipsterboxComponent.prototype, "tipster", void 0);
TipsterboxComponent = __decorate([
    core_1.Component({
        selector: 'tipsterbox',
        styleUrls: ['../assets/common.component.css'],
        styles: ["\n        section {\n            max-width: 1200px;\n            margin: auto;\n        }\n        .tipster-name, .tipster-login {\n            font-size: 30px;\n            color: black;\n            font-weight: 700;\n        }\n        .tipster-image {\n            width: 75%;\n        }\n        md-icon {\n            color: #ffc300;\n        }\n        h4 {\n            color: #FF5733;\n            font-size: 20px !important;\n        }\n        md-list-item {\n            height: 30px !important;\n        }\n    "],
        template: "\n        <section>\n            <header *ngIf=\"!displayLess\" i18n>Tipster overview</header>\n            <loader style=\"margin: auto\" *ngIf=\"isLoading\"></loader>\n            <alert-box alertType=\"warning\" [message]=\"warningMessage\" disableClose=\"true\" *ngIf=\"showWarning\"></alert-box>\n            <div class=\"flex-container\" *ngIf=\"!isLoading\">\n                <div class=\"flex-item\">\n                    <img class=\"img-circle tipster-image\"\n                         src=\"{{tipster.image}}\">\n                </div>\n                <div class=\"flex-item\">\n                    <div class=\"tipster-name\" *ngIf=\"!displayLess\">\n                        {{tipster.name}}\n                    </div>\n                    <div class=\"tipster-login\">\n                        <a [routerLink]=\"['/tipster', tipster.id]\">{{tipster.login}}</a>\n                    </div>\n                    <md-list class=\"tipster-name\">\n                        <md-divider></md-divider>\n                        <!--<h3 md-subheader>Statystyki</h3>-->\n                        <md-list-item>\n                            <md-icon md-list-icon i18n-mdTooltip mdTooltip=\"Hit rate, last 3 months\"\n                                     [mdTooltipPosition]=\"'above'\">timeline</md-icon>\n                            <h4 md-line>{{tipster.efficiency}}</h4>\n                            <p md-line *ngIf=\"!displayLess\" i18n> Hit rate, last 3 months </p>\n                        </md-list-item>\n                        <md-list-item>\n                            <md-icon md-list-icon i18n-mdTooltip mdTooltip=\"Current tips amount\"\n                                     [mdTooltipPosition]=\"'above'\">access_time</md-icon>\n                            <h4 md-line>{{tipster.count_of_bets}}</h4>\n                            <p md-line *ngIf=\"!displayLess\"> current tips </p>\n                        </md-list-item>\n                        <md-list-item>\n                            <md-icon md-list-icon i18n-mdTooltip mdTooltip=\"Subscriptions sold amount\"\n                                     [mdTooltipPosition]=\"'above'\">attach_money</md-icon>\n                            <h4 md-line>{{tipster.sold_subscriptions}}</h4>\n                            <p md-line *ngIf=\"!displayLess\" i18n> sold subscriptions </p>\n                        </md-list-item>\n                    </md-list>\n                </div>\n            </div>\n        </section>",
    })
], TipsterboxComponent);
exports.TipsterboxComponent = TipsterboxComponent;
//# sourceMappingURL=tipsterbox.component.js.map