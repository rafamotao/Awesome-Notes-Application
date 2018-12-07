import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthServerProvider {

    private SERVER_API_URL = 'http://localhost:8080/api/';

    constructor(
        private http: Http
    ) {}

    login(credentials): Observable<any> {

        const data = {
            username: credentials.username,
            password: credentials.password,
            appId: 1
        };
        return this.http.post(this.SERVER_API_URL + 'authenticate', data).map(authenticateSuccess.bind(this));

        function authenticateSuccess(resp) {
            const bearerToken = resp.headers.get('Authorization');
            if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
                const jwt = bearerToken.slice(7, bearerToken.length);
                const id = JSON.parse(resp._body).id_user;
                this.storeAuthenticationToken(jwt, id);
                return jwt;
            }
        }
    }

    storeAuthenticationToken(jwt, id) {
        localStorage.setItem('token', jwt);
        localStorage.setItem('id', id);
    }
}
