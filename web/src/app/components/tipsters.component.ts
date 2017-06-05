/**
 * Created by akselon on 2017-05-29.
 */
import {Component, Inject, OnInit} from '@angular/core';
import {Tipster} from '../models/tipster';
import {TipsterService} from '../services/tipster.service';
import {MD_DIALOG_DATA, MdDialog} from "@angular/material";

@Component({
    selector: 'tipsters',
    templateUrl: './assets/tipsters.component.html',
    styleUrls: [ './assets/common.css', './assets/tipsters.component.css' ]
})
export class TipstersComponent implements OnInit {
    tipsters: Tipster[] = [];
    isLoading = true;
    filterName = '';
    filterMinPrice: number;
    filterMaxPrice: number;
    showRadioButton: boolean[] = [];
    tipsterOneToCompare = 0;
    tipsterTwoToCompare = 0;

    constructor(private tipsterService: TipsterService,
                public dialog: MdDialog) { }
    ngOnInit(): void {
        this.search();
    }
    search() {
        this.isLoading = true;
        this.tipsterService.getTipsters(this.filterName, this.filterMinPrice, this.filterMaxPrice)
            .then(tipsters => {
                this.tipsters = tipsters;
                this.isLoading = false;
            });
    }
    reset() {
        this.filterName = this.filterMinPrice = this.filterMaxPrice = null;
        this.search();
    }
    setCompareTipster(id: number) {
        if (this.tipsterOneToCompare == 0 || this.tipsterOneToCompare == id) {
            this.tipsterOneToCompare = this.tipsterOneToCompare == id ? 0 : id;
        } else if (this.tipsterTwoToCompare == 0 || this.tipsterTwoToCompare == id) {
            this.tipsterTwoToCompare = this.tipsterTwoToCompare == id ? 0 : id;
        } else {
            this.tipsterOneToCompare = this.tipsterTwoToCompare;
            this.tipsterTwoToCompare = id;
        }
    }
    mouseOver(id: number) {
        this.showRadioButton = [];
        this.showRadioButton[id] = true;
    }
    compare() {
        this.dialog.open(TipstersCompareDialog, {
            data: {
                tipsterOne: this.tipsterOneToCompare,
                tipsterTwo: this.tipsterTwoToCompare
            }
        });
    }
}


@Component({
    selector: 'tipsters-compare-dialog',
    templateUrl: './assets/tipsters-compare-dialog.html',
    styleUrls: ['./assets/tipsters-compare-dialog.css' ]
})
export class TipstersCompareDialog implements OnInit {
    isLoading = true;
    tipsterOne: Tipster = null;
    tipsterTwo: Tipster = null;

    constructor(private tipsterService: TipsterService,
                @Inject(MD_DIALOG_DATA) public data: any) { }

    ngOnInit(): void {
        this.isLoading = true;
        this.tipsterService.getTipster(this.data.tipsterOne)
            .then(tipster => {
                this.tipsterOne = tipster;
            });
        this.tipsterService.getTipster(this.data.tipsterTwo)
            .then(tipster => {
                this.tipsterTwo = tipster;
                this.isLoading = false;
            });
    }
}