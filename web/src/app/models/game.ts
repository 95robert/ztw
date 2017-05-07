/**
 * Created by akselon on 2017-04-24.
 */
import {League} from './league';
import {Team} from './team';

export class Game {
    constructor(
        public id: number,
        public date: Date,
        public teamOneScore: number,
        public teamTwoScore: number,
        public league: League,
        public teamOne: Team,
        public teamTwo: Team
    ) { };
}
