import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { User } from '../model/user.model';
 
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }
    // Might want to use Authentication token Also might need to stringify
    private _currentUser: User = null; 
    login(username: string, password: string) {
        // TODO replace with out own api
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                this._currentUser = user;
                return user;
            })
    }

    get currentUser() {
        return this._currentUser;
    }

    set currentUser(user: User) {
        this._currentUser = user;
    }
 
    logout() {
        // remove user from local storage to log user out
        this._currentUser = null;
    }
}