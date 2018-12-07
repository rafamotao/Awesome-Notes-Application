import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-layout-note-list',
  templateUrl: './layout-note-list.component.html',
  styleUrls: ['./layout-note-list.component.scss']
})
export class LayoutNoteListComponent implements OnInit {

  @Input() notes: Note[] = null;
  @Output() idNoteDeletedList = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  receiverInfoNoteDeletedFromItem(idNoteDeletedItem) {
    this.idNoteDeletedList.emit(idNoteDeletedItem);
}

}
