import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutNoteNewComponent } from '../../../../app/layout/layout-note-new/layout-note-new.component';


describe('LayoutNoteNewComponent', () => {
  let component: LayoutNoteNewComponent;
  let fixture: ComponentFixture<LayoutNoteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutNoteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutNoteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
