/**
 * Created by akselon on 2017-05-22.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from '../models/user';
import {HttpResult} from '../models/http-result';

@Injectable()
export class UserService {
    private url = 'api/settings';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }
    getUserSettings(): Promise<User> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => {
                return response.json() as User;
            })
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    saveChanges(user: User): Promise<HttpResult> {
        const url = `${this.url}/edit`;
        return this.http
            .post(url, JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(response => {
                const r = JSON.parse(response._body);
                return new HttpResult(r.ok, r.errorCode);
            })
            .catch(this.handleError);
    }
}
