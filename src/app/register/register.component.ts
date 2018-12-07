import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  registrationError: boolean;
  registrationErrorMessage: string;
  registrationSuccess: boolean;
  registrationSuccessMessage: string;

  username: string;
  password: string;
  passwordConfirmation: string;

  constructor(private router: Router,
              private registerService: RegisterService) {
  }

  register() {
      console.log(this.username + '-' + this.password + '-' + this.passwordConfirmation);
      if (this.password !== this.passwordConfirmation) {
        this.registrationErrorMessage = 'Different passwords!';
        this.registrationError = true;
    } else {
        this.registerService.save({
                username: this.username,
                pass: this.password,
                apps: [ { id: 1 } ]
              }).subscribe(() => {
            this.registrationError = false;
            this.registrationSuccess = true;
        }, (response) => this.processError(response));
    }
  }

  private processError(response) {
    this.registrationSuccess = false;
    this.registrationError = true;
    this.registrationErrorMessage = JSON.parse(response._body).title;
}

}
