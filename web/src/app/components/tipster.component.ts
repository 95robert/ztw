/**
 * Created by Aksel on 2017-05-08.
 */
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Tipster} from '../models/tipster';
import {TipsterService} from '../services/tipster.service';

@Component({
    selector: 'tipster',
    templateUrl: './assets/tipster.component.html',
    styleUrls: [ './assets/common.component.css'],
    styles: [`
        section {
            max-width: 1200px;
            margin: auto;
        }
        .tipster-name, .tipster-login {
            font-size: 30px;
            color: black;
            font-weight: 700;
        }
        .tipster-image {
            width: 75%;
        }
        md-icon {
            color: #ffc300;
        }
        h4 {
            color: #FF5733;
            font-size: 20px !important;
        }
    `]
})
export class TipsterComponent implements OnInit {
    id: number;
    private sub: any;
    tipster: Tipster;
    isLoading = true;
    showWarning = false;
    warningMessage = '';
    constructor(
        private route: ActivatedRoute,
        private tipsterService: TipsterService
    ) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.tipsterService.getTipster(this.id)
                .then(tipster => {
                    this.tipster = tipster;
                    console.log(`Załadowano tipstera`);
                    console.log(this.tipster);
                    this.isLoading = false;
                })
                .catch(message => {
                    this.warningMessage = message;
                    this.showWarning = true;
                    this.isLoading = false;
                });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
