import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-layout-note-new',
  templateUrl: './layout-note-new.component.html',
  styleUrls: ['./layout-note-new.component.scss']
})
export class LayoutNoteNewComponent implements OnInit {

  isCollapsed = true;
  toggle_info = 'Create a note';

  noteTitle: string;
  noteDescription: string;

  @Output() newNote = new EventEmitter();

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  createNote() {
    this.noteService.create({
            title: this.noteTitle,
            description: this.noteDescription,
            appUserId: localStorage['id']
        }).subscribe(res => {
               this.newNote.emit(res);
        },
        error => {
          console.log('error');
        }
    );
  }

  collapsed(event: any): void {
    this.toggle_info = 'Create a note';
  }

  expanded(event: any): void {
    this.toggle_info = 'Save';
  }

}
