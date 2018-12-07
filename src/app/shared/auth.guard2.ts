import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard2 implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): Promise<boolean> {
        return new Promise((resolve) => {
            if (!localStorage.getItem('token')) {
                resolve(true);
                return true;
            }
            this.router.navigate(['/']);
            resolve(false);
            // return false;

        });
    }
}
