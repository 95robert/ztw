/**
 * Created by akselon on 2017-06-05.
 */
import {Component, OnInit} from '@angular/core';
import {Tipster} from '../models/tipster';
import {TipsterService} from '../services/tipster.service';

@Component({
    selector: 'ranking',
    templateUrl: './assets/ranking.component.html',
    styleUrls: [ './assets/common.css', './assets/ranking.component.css' ]
})
export class RankingComponent implements OnInit {
    tipsters: Tipster[] = [];
    isLoading = true;
    filterName = '';
    filterMinPrice: number;
    filterMaxPrice: number;
    constructor(private tipsterService: TipsterService) { }

    ngOnInit(): void {
        this.isLoading = true;
        this.tipsterService.getBestTipsters()
            .then(tipsters => {
                this.tipsters = tipsters;
                this.isLoading = false;
            });
    }
}
