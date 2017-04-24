import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {User} from "../models/user";
import {HttpResult} from "../models/http-result";

@Injectable()
export class AuthenticationService {
    private apiUrl = 'api/';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private router: Router, private http: Http){}

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    logout(): Promise<Boolean> {
        return this.http
            .get(this.apiUrl+'logout')
            .toPromise()
            .then(res => {
                localStorage.removeItem("currentUser");
                if (res.text() !== "1") {
                    console.log("Zapytanie wylogowywania nie zwróciło 1!");
                    return false;
                } else {
                    return true;
                }
            })
            .catch(this.handleError);
    }

    login(username: string, password: string): Promise<HttpResult> {
        return this.http
            .post(this.apiUrl+'login', JSON.stringify({username: username, password: password}), {headers: this.headers})
            .toPromise()
            .then(res => {
                if (res.json().ok) {
                    localStorage.setItem("currentUser", username);
                }
                return res.json() as HttpResult;
            })
            .catch(this.handleError);
    }

    register(login: string, email: string, password1: string, password2: string): Promise<HttpResult> {
        return this.http
            .post(this.apiUrl+'register', JSON.stringify({email: email, login: login, password: password1, repassword: password2}), {headers: this.headers})
            .toPromise()
            .then(res => {
                if (res.json().ok) {
                    localStorage.setItem("currentUser", login);
                }
                return res.json() as HttpResult;
            })
            .catch(this.handleError);
        
    }
}