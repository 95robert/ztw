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
                            <input [(ngModel)]="user.login" mdInput placeholder="Nazwa użytkownika">
                        </md-input-container>
                        <br />
                        <md-input-container>
                            <input [(ngModel)]="user.password" mdInput type="password" placeholder="Hasło" value="Sushi">
                        </md-input-container>
                        <br />
                        <button md-raised-button (click)="login()">Zaloguj</button>
                        <span *ngIf="errorMsg" class="http-status">{{errorMsg}}</span>
                    </div>
                </md-tab>
                
                <md-tab label="Rejestracja">
                    <div class="tab-container">
                        <md-card-title>Rejestracja</md-card-title>
                        <md-input-container>
                            <input [(ngModel)]="newUser.login" mdInput placeholder="Nazwa użytkownika">
                        </md-input-container>
                        <br />
                        <md-input-container>
                            <input [(ngModel)]="newUser.email" mdInput placeholder="Email">
                        </md-input-container>
                        <br />
                        <md-input-container>
                            <input [(ngModel)]="newUser.password1" mdInput type="password" placeholder="Hasło">
                        </md-input-container>
                        <br />
                        <md-input-container>
                            <input [(ngModel)]="newUser.password2" mdInput type="password" placeholder="Powtórz haslo">
                        </md-input-container>
                        <br />
                        <button md-raised-button (click)="register()">Zarejestruj</button>
                    </div>
                </md-tab>
            </md-tab-group>
        </md-card>
    `,
    styles: [`
        md-card { padding: 0; }
        .tab-container { padding: 20px; }
        .http-status {
            padding: 5px;
            font-weight: 600;
            color: #ff0000;
        }
    `]
})

export class LoginComponent {
    public user = new User(0, '','');
    public errorMsg = '';
    public newUser = {login: '', email: '', password1: '', password2: ''}

    constructor(
        private service:AuthenticationService) {}

    login() {
        if(!this.service.login(this.user.login, this.user.password)){
            this.errorMsg = 'Failed to login';
        }
    }

    register() {
        if(!this.service.register(this.newUser)){
            this.errorMsg = 'Failed to login';
        }
    }
}