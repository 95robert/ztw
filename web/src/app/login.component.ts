import {Component, ElementRef} from '@angular/core';
import {AuthenticationService, User} from './authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <div class="app-content">
            <md-card>
                <md-tab-group>
                    <md-tab label="Logowanie">
                        <md-card-title>Logowanie</md-card-title>
                        <md-input-container>
                            <input mdInput placeholder="Nazwa użytkownika">
                        </md-input-container>
                        <br />
                        <md-input-container>
                            <input mdInput type="password" placeholder="Hasło" value="Sushi">
                        </md-input-container>
                        <br />
                        <button md-raised-button>Zaloguj</button></md-tab>
                    <md-tab label="Rejestracja">
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
                    </md-tab>
                </md-tab-group>
            </md-card>
        </div>
        <!--<div class="container" >-->
            <!--<div class="title">-->
                <!--Welcome-->
            <!--</div>-->
            <!--<div class="panel-body">-->
                <!--<div class="row">-->
                    <!--<div class="input-field col s12">-->
                        <!--<input [(ngModel)]="user.email" id="email"-->
                               <!--type="email" class="validate">-->
                        <!--<label for="email">Email</label>-->
                    <!--</div>-->
                <!--</div>-->

                <!--<div class="row">-->
                    <!--<div class="input-field col s12">-->
                        <!--<input [(ngModel)]="user.password" id="password"-->
                               <!--type="password" class="validate">-->
                        <!--<label for="password">Password</label>-->
                    <!--</div>-->
                <!--</div>-->

                <!--<span>{{errorMsg}}</span>-->
                <!--<button (click)="login()"-->
                        <!--class="btn waves-effect waves-light"-->
                        <!--type="submit" name="action">Login</button>-->
            <!--</div>-->
        <!--</div>-->
    `,
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    public user = new User('','');
    public errorMsg = '';

    constructor(
        private _service:AuthenticationService) {}

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}