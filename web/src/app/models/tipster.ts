/**
 * Created by Aksel on 2017-05-08.
 */
export class Tipster {
    constructor(
        public id: number,
        public login: string,
        public name: string,
        public efficiency: number,
        public efficiency_last_3_month: number,
        public efficiency_last_month: number,
        // public yield: number,
        public sold_single_bet: number,
        public sold_subscriptions: number,
        public count_of_currents_bets: number,
        public count_of_bets: number,
        public subscription_cost: number,
) { }
}
