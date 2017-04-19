import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service'
import {User} from "../models/user";
import {Router} from "@angular/router";

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
                        <span *ngIf="httpLoginStatusMessage" [ngClass]="{'error': httpLoginStatusError}" [innerHTML]="httpLoginStatusMessage" class="http-status"></span>
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
                        <span *ngIf="httpRegisterStatusMessage" [ngClass]="{'error': httpRegisterStatusError}" [innerHTML]="httpRegisterStatusMessage" class="http-status"></span>
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
            font-weight: 500;
        }
        .http-status.error {
            color: #ff0000;
        }
    `]
})

export class LoginComponent {
    public user = new User(0, '','');
    public httpLoginStatusMessage = '';
    public httpLoginStatusError = false;

    public httpRegisterStatusMessage = '';
    public httpRegisterStatusError = false;
    public newUser = {login: '', email: '', password1: '', password2: ''}

    constructor(
        private router: Router,
        private service:AuthenticationService) {}

    login() {
        this.httpLoginStatusError = false;
        this.httpLoginStatusMessage = 'Logowanie ...';
        this.service.login(this.user.login, this.user.password).then(res => {
            if (res.ok) {
                this.httpLoginStatusError = false;
                this.httpLoginStatusMessage = 'Zalogowano pomyślnie';
                setTimeout(() => {
                    this.router.navigate(['/home']);
                }, 3000);
            } else {
                this.httpLoginStatusError = true;
                this.httpLoginStatusMessage = 'Nie udało się zalogować: '+res.error_msg;
            }
        });
    }

    register() {
        this.httpRegisterStatusError = false;
        this.httpRegisterStatusMessage = 'Rejestracja ...';
        this.service.register(this.newUser.login, this.newUser.email, this.newUser.password1, this.newUser.password2).then(res => {
            console.log(res);
            if (res.ok) {
                this.httpRegisterStatusError = false;
                this.httpRegisterStatusMessage = 'Zarejestrowano i zalogowano pomyślnie';
                setTimeout(() => {
                    this.router.navigate(['/home']);
                }, 1000);
            } else {
                this.httpRegisterStatusError = true;
                this.httpRegisterStatusMessage = 'Nie udało się zarejestrować: '+res.error_msg;
            }
        });
    }
}