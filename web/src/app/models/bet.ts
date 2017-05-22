/**
 * Created by Aksel on 2017-05-08.
 */
import {Tipster} from './tipster';
export class Bet {
    constructor(
        public id: number,
        public cost: number,
        public odds: number,
        public stake: number,
        public result: number,
        public game: number,
        public user: Tipster,
    ) { };
}
