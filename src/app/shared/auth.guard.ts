import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): Promise<boolean> {
        return new Promise((resolve) => {
            if (localStorage.getItem('token')) {
                resolve(true);
                return true;
            }
            this.router.navigate(['/login']);
            resolve(false);
            return false;

        });
    }
}
