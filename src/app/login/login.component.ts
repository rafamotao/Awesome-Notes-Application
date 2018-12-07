import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authenticationError: boolean;
  authenticationErrorMessage: string;

  username: string;
  password: string;

  constructor(private router: Router,
              private loginService: LoginService) {
  }

  login() {
    this.loginService.login({
        username: this.username,
        password: this.password
    }).then((res) => {
        this.authenticationError = false;
        this.router.navigate(['']);
    }).catch((error) => {
        this.authenticationErrorMessage = JSON.parse(error._body).detail;
        this.authenticationError = true;
    });
}
}
