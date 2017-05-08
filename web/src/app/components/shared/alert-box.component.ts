/**
 * Created by akselon on 2017-04-14.
 */
import {Component, Input} from '@angular/core';

@Component({
    selector: 'alert-box',
    template: `
        <md-card class="alert {{alertType}}">
            <span class="closebtn" onclick="this.parentElement.style.display='none';" *ngIf="!disableClose">&times;</span>
            <span [ngSwitch]="alertType">
                <md-icon *ngSwitchCase="'danger'">error</md-icon>
                <md-icon *ngSwitchCase="'warning'">warning</md-icon>
                <md-icon *ngSwitchCase="'success'">check</md-icon>
                <md-icon *ngSwitchDefault>info</md-icon>
            </span>
            {{message}}
        </md-card>`,
    styles: [`
        .alert {
            color: white;
            margin-bottom: 15px;
        }
        md-icon {
            margin-right: 14px;
            vertical-align: bottom;    
            color: black;
            opacity: 0.4;
            margin-bottom: -2px;
        }
        .closebtn {
            margin-left: 15px;
            color: white;
            font-weight: bold;
            float: right;
            font-size: 22px;
            line-height: 20px;
            cursor: pointer;
            transition: 0.3s;
        }
        .closebtn:hover { color: black; }
        .info { background-color: #2196f3;}
        .danger { background-color: #ef5350;}
        .warning { background-color: #ffb74d;}
        .success { background-color: #8bc34a;}
    `]
})
export class AlertBoxComponent {
    @Input()
    alertType: string = 'info';
    @Input()
    message: string = '';
    @Input()
    disableClose: boolean = false;
}

