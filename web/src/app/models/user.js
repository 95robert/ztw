"use strict";
/**
 * Created by akselon on 2017-04-13.
 */
var User = (function () {
    function User(id, login, password, subscriptionCost, image, about) {
        this.id = id;
        this.login = login;
        this.password = password;
        this.subscriptionCost = subscriptionCost;
        this.image = image;
        this.about = about;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map