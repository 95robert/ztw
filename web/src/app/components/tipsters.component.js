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
/**
 * Created by akselon on 2017-05-29.
 */
var core_1 = require("@angular/core");
var tipster_service_1 = require("../services/tipster.service");
var material_1 = require("@angular/material");
var TipstersComponent = (function () {
    function TipstersComponent(tipsterService, dialog) {
        this.tipsterService = tipsterService;
        this.dialog = dialog;
        this.tipsters = [];
        this.isLoading = true;
        this.filterName = '';
        this.showRadioButton = [];
        this.tipsterOneToCompare = 0;
        this.tipsterTwoToCompare = 0;
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
    TipstersComponent.prototype.setCompareTipster = function (id) {
        if (this.tipsterOneToCompare == 0 || this.tipsterOneToCompare == id) {
            this.tipsterOneToCompare = this.tipsterOneToCompare == id ? 0 : id;
        }
        else if (this.tipsterTwoToCompare == 0 || this.tipsterTwoToCompare == id) {
            this.tipsterTwoToCompare = this.tipsterTwoToCompare == id ? 0 : id;
        }
        else {
            this.tipsterOneToCompare = this.tipsterTwoToCompare;
            this.tipsterTwoToCompare = id;
        }
    };
    TipstersComponent.prototype.mouseOver = function (id) {
        this.showRadioButton = [];
        this.showRadioButton[id] = true;
    };
    TipstersComponent.prototype.compare = function () {
        this.dialog.open(TipstersCompareDialog, {
            data: {
                tipsterOne: this.tipsterOneToCompare,
                tipsterTwo: this.tipsterTwoToCompare
            }
        });
    };
    return TipstersComponent;
}());
TipstersComponent = __decorate([
    core_1.Component({
        selector: 'tipsters',
        templateUrl: './assets/tipsters.component.html',
        styleUrls: ['./assets/common.css', './assets/tipsters.component.css']
    }),
    __metadata("design:paramtypes", [tipster_service_1.TipsterService,
        material_1.MdDialog])
], TipstersComponent);
exports.TipstersComponent = TipstersComponent;
var TipstersCompareDialog = (function () {
    function TipstersCompareDialog(tipsterService, data) {
        this.tipsterService = tipsterService;
        this.data = data;
        this.isLoading = true;
        this.tipsterOne = null;
        this.tipsterTwo = null;
    }
    TipstersCompareDialog.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.tipsterService.getTipster(this.data.tipsterOne)
            .then(function (tipster) {
            _this.tipsterOne = tipster;
        });
        this.tipsterService.getTipster(this.data.tipsterTwo)
            .then(function (tipster) {
            _this.tipsterTwo = tipster;
            _this.isLoading = false;
        });
    };
    return TipstersCompareDialog;
}());
TipstersCompareDialog = __decorate([
    core_1.Component({
        selector: 'tipsters-compare-dialog',
        templateUrl: './assets/tipsters-compare-dialog.html',
        styleUrls: ['./assets/tipsters-compare-dialog.css']
    }),
    __param(1, core_1.Inject(material_1.MD_DIALOG_DATA)),
    __metadata("design:paramtypes", [tipster_service_1.TipsterService, Object])
], TipstersCompareDialog);
exports.TipstersCompareDialog = TipstersCompareDialog;
//# sourceMappingURL=tipsters.component.js.map