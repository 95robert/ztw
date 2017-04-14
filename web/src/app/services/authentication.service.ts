import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../models/user";

var users = [
    new User(1, 'admin@admin.com','adm9'),
    new User(2, 'user1@gmail.com','a23'),
    new User(3, 'test','test'),
];

@Injectable()
export class AuthenticationService {

    constructor(
        private router: Router){}

    logout() {
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login']);
    }

    login(user : User){
        var authenticatedUser = users.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password){
            console.log("Udało się");
            localStorage.setItem("currentUser", "id_"+authenticatedUser.id);
            this.router.navigate(['/home']);
            return true;
        }
        return false;

    }
}