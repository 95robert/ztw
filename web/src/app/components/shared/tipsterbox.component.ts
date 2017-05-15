/**
 * Created by @akselon on 2017-05-08.
 */
import {Component, Input} from '@angular/core';
import {Tipster} from '../../models/tipster';

@Component({
    selector: 'tipsterbox',
    styleUrls: [ '../assets/common.component.css'],
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
        md-list-item {
            height: 30px !important;
        }
    `],
    templateUrl: '../assets/tipster.component.html'
})
export class TipsterboxComponent  {
    @Input() tipster: Tipster;
    // Hides unusfull informations from template
    displayLess: boolean = true;
}
