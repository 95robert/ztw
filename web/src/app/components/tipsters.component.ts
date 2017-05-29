/**
 * Created by Aksel on 2017-05-29.
 */
import {Component, OnInit} from '@angular/core';
import {Tipster} from '../models/tipster';
import {TipsterService} from '../services/tipster.service';

@Component({
    selector: 'tipsters',
    // templateUrl: './assets/games.component.html',
    styleUrls: [ './assets/common.component.css'],
    styles: [`
        .flex-item { width: 160px !important; margin-bottom: 20px; }
        .flex-container { justify-content: flex-start !important; }
    `],
    template: `
        <section>
            <header i18n>Tipsters search</header>
            <md-card>
                <md-input-container>
                    <input mdInput [(ngModel)]="filterName" placeholder="Search by login">
                </md-input-container><br />
                <button md-raised-button (click)="search()">Search</button>
            </md-card>
            <loader style="margin: auto" *ngIf="isLoading"></loader>
            <md-card class="flex-container" *ngIf="tipsters.length">
                <tipsterbox *ngFor="let tipster of tipsters" [tipster]="tipster" class="flex-item"></tipsterbox>
            </md-card>
        </section>
    `
})
export class TipstersComponent implements OnInit {
    tipsters: Tipster[] = [];
    isLoading = true;
    filterName = '';
    constructor(private tipsterService: TipsterService) { }

    ngOnInit(): void {
        this.search();
    }
    search() {
        this.isLoading = true;
        this.tipsterService.getTipsters(this.filterName)
            .then(tipsters => {
                this.tipsters = tipsters;
                this.isLoading = false;
            });
    }
}
