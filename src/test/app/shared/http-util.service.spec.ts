import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUtilService } from '../../../app/services/http-util.service';

describe('HttpUtilService', () => {
  let component: HttpUtilService;
  let fixture: ComponentFixture<HttpUtilService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpUtilService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpUtilService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
