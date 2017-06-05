/**
 * Created by akselon on 2017-05-29.
 */
import {Component, OnInit} from '@angular/core';
import {Tipster} from '../models/tipster';
import {TipsterService} from '../services/tipster.service';

@Component({
    selector: 'tipsters',
    templateUrl: './assets/tipsters.component.html',
    styleUrls: [ './assets/common.component.css', './assets/tipsters.component.css' ]
})
export class TipstersComponent implements OnInit {
    tipsters: Tipster[] = [];
    isLoading = true;
    filterName = '';
    filterMinPrice: number;
    filterMaxPrice: number;
    constructor(private tipsterService: TipsterService) { }

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
}
