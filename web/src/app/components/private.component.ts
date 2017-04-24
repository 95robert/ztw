import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'
import {Router} from "@angular/router";

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <md-card>
            <span i18n>This content is only available for logged in users :)</span>
            <br />
            <br />
            <button md-raised-button (click)="logout()" i18n>Logout</button>
        </md-card>
    `
})

export class PrivateComponent {
    constructor(
        private router: Router,
        private service:AuthenticationService){}

    logout() {
        this.service.logout().then(res => {
            this.router.navigate(['/login']);
        });
    }
}