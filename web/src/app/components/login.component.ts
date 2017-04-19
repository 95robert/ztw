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
                        <span *ngIf="httpStatusMessage" [ngClass]="{'error': httpStatusError}" [innerHTML]="httpStatusMessage" class="http-status"></span>
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
            font-weight: 500;
        }
        .http-status.error {
            color: #ff0000;
        }
    `]
})

export class LoginComponent {
    public user = new User(0, '','');
    public httpStatusMessage = '';
    public httpStatusError = false;
    public newUser = {login: '', email: '', password1: '', password2: ''}

    constructor(
        private router: Router,
        private service:AuthenticationService) {}

    login() {
        this.httpStatusError = false;
        this.httpStatusMessage = 'Logowanie ...';
        this.service.login(this.user.login, this.user.password).then(res => {
            console.log(res);
            if (res.ok) {
                this.httpStatusError = false;
                this.httpStatusMessage = 'Zalogowano pomyślnie';
                setTimeout(() => {
                    this.router.navigate(['/home']);
                }, 1000);
            } else {
                this.httpStatusError = true;
                this.httpStatusMessage = 'Nie udało się zalogować: '+res.error_msg;
            }
        });
    }

    register() {
        if(!this.service.register(this.newUser)){
            this.httpStatusMessage = 'Failed to login';
        }
    }
}