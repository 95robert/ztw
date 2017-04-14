import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            <div class="content">
                <span>Congratulations, you have successfully logged in!!</span>
                <br />
                <button md-raised-button (click)="logout()" >Wyloguj</button>
            </div>
        </div>
    `
})

export class PrivateComponent {
    constructor(
        private service:AuthenticationService){}

    logout() {
        this.service.logout();
    }
}