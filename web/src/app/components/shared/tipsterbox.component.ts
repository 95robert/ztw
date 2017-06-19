/**
 * Created by akselon on 2017-05-08.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Tipster} from '../../models/tipster';

@Component({
    selector: 'tipsterbox',
    styleUrls: [ '../assets/common.css'],
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
                </div>
            </div>
        </section>`,
})
export class TipsterboxComponent {
    @Input() tipster: Tipster;
    // Hides unusfull informations from template
    displayLess: boolean = true;
}
