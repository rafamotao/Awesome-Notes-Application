import { Injectable } from '@angular/core';

import { AuthServerProvider } from './auth-jwt.service';

@Injectable()
export class LoginService {

    constructor(
        private authServerProvider: AuthServerProvider
    ) {}

    login(credentials) {

        return new Promise((resolve, reject) => {
            this.authServerProvider.login(credentials).subscribe((data) => {
                console.log(data);
                resolve(data);
            }, (err) => {
                console.log(err);
                reject(err);
            });
        });
    }
}
