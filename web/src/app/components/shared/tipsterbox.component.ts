/**
 * Created by @akselon on 2017-05-08.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Tipster} from '../../models/tipster';

@Component({
    selector: 'tipsterbox',
    styleUrls: [ '../assets/common.component.css'],
    styles: [`
        section {
            max-width: 1200px;
            margin: auto;
        }
        .tipster-name, .tipster-login {
            font-size: 30px;
            color: black;
            font-weight: 700;
        }
        .tipster-image {
            width: 75%;
        }
        md-icon {
            color: #ffc300;
        }
        h4 {
            color: #FF5733;
            font-size: 20px !important;
        }
        md-list-item {
            height: 30px !important;
        }
    `],
    template: `
        <section>
            <header *ngIf="!displayLess" i18n>Tipster overview</header>
            <loader style="margin: auto" *ngIf="isLoading"></loader>
            <alert-box alertType="warning" [message]="warningMessage" disableClose="true" *ngIf="showWarning"></alert-box>
            <div class="flex-container" *ngIf="!isLoading">
                <div class="flex-item">
                    <img class="img-circle tipster-image"
                         src="{{tipster.image}}">
                </div>
                <div class="flex-item">
                    <div class="tipster-name" *ngIf="!displayLess">
                        {{tipster.name}}
                    </div>
                    <div class="tipster-login">
                        <a [routerLink]="['/tipster', tipster.id]">{{tipster.login}}</a>
                    </div>
                    <md-list class="tipster-name">
                        <md-divider></md-divider>
                        <!--<h3 md-subheader>Statystyki</h3>-->
                        <md-list-item>
                            <md-icon md-list-icon i18n-mdTooltip mdTooltip="Hit rate, last 3 months"
                                     [mdTooltipPosition]="'above'">timeline</md-icon>
                            <h4 md-line>{{tipster.efficiency}}</h4>
                            <p md-line *ngIf="!displayLess" i18n> Hit rate, last 3 months </p>
                        </md-list-item>
                        <md-list-item>
                            <md-icon md-list-icon i18n-mdTooltip mdTooltip="Current tips amount"
                                     [mdTooltipPosition]="'above'">access_time</md-icon>
                            <h4 md-line>{{tipster.count_of_bets}}</h4>
                            <p md-line *ngIf="!displayLess"> current tips </p>
                        </md-list-item>
                        <md-list-item>
                            <md-icon md-list-icon i18n-mdTooltip mdTooltip="Subscriptions sold amount"
                                     [mdTooltipPosition]="'above'">attach_money</md-icon>
                            <h4 md-line>{{tipster.sold_subscriptions}}</h4>
                            <p md-line *ngIf="!displayLess" i18n> sold subscriptions </p>
                        </md-list-item>
                    </md-list>
                </div>
            </div>
        </section>`,
})
export class TipsterboxComponent implements OnInit {
    @Input() tipster: Tipster;
    // Hides unusfull informations from template
    displayLess: boolean = true;
    ngOnInit(): void {
        console.log(this.tipster);
    }
}
