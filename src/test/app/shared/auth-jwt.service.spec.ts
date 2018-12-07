import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthServerProvider } from '../../../app/services/auth-jwt.service';

describe('AuthServerProvider', () => {
  let component: AuthServerProvider;
  let fixture: ComponentFixture<AuthServerProvider>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthServerProvider ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthServerProvider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
