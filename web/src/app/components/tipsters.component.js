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
 * Created by Aksel on 2017-05-29.
 */
var core_1 = require("@angular/core");
var tipster_service_1 = require("../services/tipster.service");
var TipstersComponent = (function () {
    function TipstersComponent(tipsterService) {
        this.tipsterService = tipsterService;
        this.tipsters = [];
        this.isLoading = true;
        this.filterName = '';
    }
    TipstersComponent.prototype.ngOnInit = function () {
        this.search();
    };
    TipstersComponent.prototype.search = function () {
        var _this = this;
        this.isLoading = true;
        this.tipsterService.getTipsters(this.filterName)
            .then(function (tipsters) {
            _this.tipsters = tipsters;
            _this.isLoading = false;
        });
    };
    return TipstersComponent;
}());
TipstersComponent = __decorate([
    core_1.Component({
        selector: 'tipsters',
        // templateUrl: './assets/games.component.html',
        styleUrls: ['./assets/common.component.css'],
        styles: ["\n        .flex-item { width: 160px !important; margin-bottom: 20px; }\n        .flex-container { justify-content: flex-start !important; }\n    "],
        template: "\n        <section>\n            <header i18n>Tipsters search</header>\n            <md-card>\n                <md-input-container>\n                    <input mdInput [(ngModel)]=\"filterName\" placeholder=\"Search by login\">\n                </md-input-container><br />\n                <button md-raised-button (click)=\"search()\">Search</button>\n            </md-card>\n            <loader style=\"margin: auto\" *ngIf=\"isLoading\"></loader>\n            <md-card class=\"flex-container\" *ngIf=\"tipsters.length\">\n                <tipsterbox *ngFor=\"let tipster of tipsters\" [tipster]=\"tipster\" class=\"flex-item\"></tipsterbox>\n            </md-card>\n        </section>\n    "
    }),
    __metadata("design:paramtypes", [tipster_service_1.TipsterService])
], TipstersComponent);
exports.TipstersComponent = TipstersComponent;
//# sourceMappingURL=tipsters.component.js.map