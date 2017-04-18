import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {User} from "../models/user";

var users = [
    new User(1, 'admin@admin.com','adm9'),
    new User(2, 'user1@gmail.com','a23'),
    new User(3, 'test','test'),
];

@Injectable()
export class AuthenticationService {
    private apiUrl = 'http://localhost:8000/api/';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private router: Router, private http: Http){}

    logout() {
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login']);
    }
/*
    login(user : User){
        var authenticatedUser = users.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password){
            console.log("Udało się");
            localStorage.setItem("currentUser", "id_"+authenticatedUser.id);
            this.router.navigate(['/home']);
            return true;
        }
        return false;
    }*/
    login(username: string, password: string): Promise<Boolean> {
        return this.http
            .post(this.apiUrl+'login2', JSON.stringify({username: username, password: password}), {headers: this.headers})
            .toPromise()
            .then(res => {
                console.log(res);
                return true;
                }
            )
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    register(newUser: {login: String, email: String, password1: String, password2: String}) {
        
    }
}