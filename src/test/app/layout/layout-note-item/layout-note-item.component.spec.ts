import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutNoteItemComponent } from '../../../../app/layout/layout-note-item/layout-note-item.component';

describe('LayoutNoteItemComponent', () => {
  let component: LayoutNoteItemComponent;
  let fixture: ComponentFixture<LayoutNoteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutNoteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNoteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
