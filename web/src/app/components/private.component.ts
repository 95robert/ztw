import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <md-card>
            <span>Oto strona dostępna tylko dla zalogowanych. Takich jak ty :)</span>
            <br />
            <br />
            <br />
            <button md-raised-button (click)="logout()" >Wyloguj</button>
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