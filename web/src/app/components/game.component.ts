/**
 * Created by akselon on 2017-05-07.
 */
import {Component, Input} from '@angular/core';
import {Game} from '../models/game';

@Component({
    selector: 'game',
    templateUrl: './assets/game.component.html',
    styleUrls: ['./assets/game.component.css']
})
export class GameComponent {
    @Input() game: Game;
    @Input() disableButtons: boolean = false;
}

