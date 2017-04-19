import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <md-card>
            <span i18n>This content is only available for logget in users :)</span>
            <br />
            <br />
            <button md-raised-button (click)="logout()" i18n>Logout</button>
        </md-card>
    `
})

export class PrivateComponent {
    constructor(
        private service:AuthenticationService){}

    logout() {
        this.service.logout();
    }
}