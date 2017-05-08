"use strict";
/**
 * Created by Aksel on 2017-05-08.
 */
var Tipster = (function () {
    function Tipster(id, login, name, efficiency, efficiency_last_3_month, efficiency_last_month, 
        // public yield: number,
        sold_single_bet, sold_subscriptions, count_of_currents_bets, count_of_bets, subscription_cost) {
        this.id = id;
        this.login = login;
        this.name = name;
        this.efficiency = efficiency;
        this.efficiency_last_3_month = efficiency_last_3_month;
        this.efficiency_last_month = efficiency_last_month;
        this.sold_single_bet = sold_single_bet;
        this.sold_subscriptions = sold_subscriptions;
        this.count_of_currents_bets = count_of_currents_bets;
        this.count_of_bets = count_of_bets;
        this.subscription_cost = subscription_cost;
    }
    return Tipster;
}());
exports.Tipster = Tipster;
//# sourceMappingURL=tipster.js.map