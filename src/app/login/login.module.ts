import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
// import { AlertService } from '../services/alert.service';
// import { AlertComponent } from '../shared/directives/alert.component';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
        // AlertComponent
    ]
})
export class LoginModule {
}
