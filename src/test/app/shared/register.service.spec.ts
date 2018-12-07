import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterService } from '../../../app/services/register.service';


describe('RegisterService', () => {
  let component: RegisterService;
  let fixture: ComponentFixture<RegisterService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
