/**
 * Created by akselon on 2017-05-08.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Tipster} from '../models/tipster';
@Injectable()
export class TipsterService {
    private url = 'api/tipster';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getTipster(id: number): Promise<Tipster> {
        return this.http.get(this.url + '/show/' + id)
            .toPromise()
            .then(response => {
                return response.json() as Tipster;
            })
            .catch(this.handleError);
    }

    getTipsters(login: string, minPrice: number, maxPrice: number): Promise<Tipster[]> {
        var filters = {};
        if (login && login != null)
            filters['login'] = login;
        if (minPrice && minPrice != null)
            filters['minPrice'] = minPrice;
        if (maxPrice && maxPrice != null)
            filters['maxPrice'] = maxPrice;

        return this.http
            .post(`${this.url}/filter`, JSON.stringify({filters: filters, sortedBy: 'subscription_cost'}), {headers: this.headers})
            .toPromise()
            .then(response => {
                return response.json() as Tipster[];
            })
            .catch(this.handleError);

    }
}
