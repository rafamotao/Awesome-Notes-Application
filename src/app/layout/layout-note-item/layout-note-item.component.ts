import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Note } from '../../models/note.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-layout-note-item',
  templateUrl: './layout-note-item.component.html',
  styleUrls: ['./layout-note-item.component.scss']
})
export class LayoutNoteItemComponent implements OnInit {

  @Input() note: Note = null;
  @Output() idNoteDeleted = new EventEmitter();

  noteEditable: Note = {title: '', description: ''};

  public infoModal;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  delete() {
    this.noteService.delete(this.note.id).subscribe((response) => {
        this.idNoteDeleted.emit(this.note.id);
    });
  }

  editNote() {
    this.noteService.update(this.noteEditable).subscribe(res => {},
        error => {
          console.log('error');
        }
    );
  }

  onShow() {
    // this.noteEditable = this.note;
    this.noteEditable.id = this.note.id;
    this.noteEditable.title = this.note.title;
    this.noteEditable.description = this.note.description;
    this.noteEditable.appUserId = this.note.appUserId;
  }

  onHide() {
    console.log('hide');
    this.noteService.update(this.noteEditable).subscribe(res => {
              // this.note = this.noteEditable;
              this.note.id = this.noteEditable.id;
              this.note.title = this.noteEditable.title;
              this.note.description = this.noteEditable.description;
              this.note.appUserId = this.noteEditable.appUserId;
        },
        error => {
        console.log('error');
        }
    );
  }

}
