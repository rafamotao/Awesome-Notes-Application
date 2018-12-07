import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from '../../../app/login/login.component';
import { ServerTestModule } from '../../test.module';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from '../../../app/login/login-routing.module';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../app/services/login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ServerTestModule,
        CommonModule,
        LoginRoutingModule,
        FormsModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        LoginService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
