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
 * Created by akselon on 2017-05-29.
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
        this.tipsterService.getTipsters(this.filterName, this.filterMinPrice, this.filterMaxPrice)
            .then(function (tipsters) {
            _this.tipsters = tipsters;
            _this.isLoading = false;
        });
    };
    TipstersComponent.prototype.reset = function () {
        this.filterName = this.filterMinPrice = this.filterMaxPrice = null;
        this.search();
    };
    return TipstersComponent;
}());
TipstersComponent = __decorate([
    core_1.Component({
        selector: 'tipsters',
        templateUrl: './assets/tipsters.component.html',
        styleUrls: ['./assets/common.component.css', './assets/tipsters.component.css']
    }),
    __metadata("design:paramtypes", [tipster_service_1.TipsterService])
], TipstersComponent);
exports.TipstersComponent = TipstersComponent;
//# sourceMappingURL=tipsters.component.js.map