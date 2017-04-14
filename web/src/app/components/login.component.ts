import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'
import {User} from "../models/user";

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <md-card>
            <md-tab-group>
                <md-tab label="Logowanie">
                    <div class="tab-container">
                        <alert-box [message]="'Użyj tych danych do logowania: test/test'"></alert-box>
                        <md-card-title>Logowanie</md-card-title>
                        <md-input-container>
                            <input [(ngModel)]="user.email" mdInput placeholder="Nazwa użytkownika">
                        </md-input-container>
                        <br />
                        <md-input-container>
                            <input [(ngModel)]="user.password" mdInput type="password" placeholder="Hasło" value="Sushi">
                        </md-input-container>
                        <br />
                        <span>{{errorMsg}}</span> <br />
                        <button md-raised-button (click)="login()" >Zaloguj</button>
                    </div>
                </md-tab>
                
                <md-tab label="Rejestracja">
                    <div class="tab-container">
                        <md-card-title>Rejestracja</md-card-title>
                        <md-input-container>
                            <input mdInput placeholder="Nazwa użytkownika">
                        </md-input-container>
                        <br />
                        <md-input-container>
                            <input mdInput type="password" placeholder="Hasło">
                        </md-input-container>
                        <br />
                        <md-input-container>
                            <input mdInput type="password" placeholder="Powtórz haslo">
                        </md-input-container>
                        <br />
                        <button md-raised-button>Zarejestruj</button>
                    </div>
                </md-tab>
            </md-tab-group>
        </md-card>
    `,
    styles: [`
        md-card { padding: 0; }
        .tab-container { padding: 20px; }
    `]
})

export class LoginComponent {
    public user = new User(0, '','');
    public errorMsg = '';

    constructor(
        private service:AuthenticationService) {}

    login() {
        if(!this.service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}