import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteService } from '../../../app/services/note.service';

describe('NoteService', () => {
  let component: NoteService;
  let fixture: ComponentFixture<NoteService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
