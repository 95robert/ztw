/**
 * Created by Aksel on 2017-05-08.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Tipster} from '../models/tipster';

@Injectable()
export class TipsterService {
    private url = 'api/tipster';  // URL to web api

    constructor(private http: Http) { }
    getTipster(id: number): Promise<Tipster> {
        return this.http.get(this.url + '/show/' + id)
            .toPromise()
            .then(response => {
                return response.json() as Tipster;
            })
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
