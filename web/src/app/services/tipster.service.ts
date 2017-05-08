/**
 * Created by Aksel on 2017-05-08.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Tipster} from '../models/tipster';

@Injectable()
export class TipsterService {
    constructor(private http: Http) { }
    getTipster(id: number): Promise<Tipster> {
        return new Promise((resolve) => {
            setTimeout(function(){
                resolve(
                    new Tipster(1, 'akselon', 'Aksel Nooitgedagt', 0, 0, 0, 0, 0, 0, 0, 0)
                );
            }, 500);
        });
    }
}
