import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNoteListComponent } from '../../../../app/layout/layout-note-list/layout-note-list.component';
import { ServerTestModule } from '../../../test.module';

describe('LayoutNoteListComponent', () => {
  let component: LayoutNoteListComponent;
  let fixture: ComponentFixture<LayoutNoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ServerTestModule,
      ],
      declarations: [ LayoutNoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
