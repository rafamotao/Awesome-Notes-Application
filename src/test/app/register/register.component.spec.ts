import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from '../../../app/register/register.component';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from '../../../app/register/register-routing.module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../../app/services/register.service';
import { ServerTestModule } from '../../test.module';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ServerTestModule,
        CommonModule,
        RegisterRoutingModule,
        FormsModule
      ],
      declarations: [ RegisterComponent ],
      providers: [
        RegisterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
