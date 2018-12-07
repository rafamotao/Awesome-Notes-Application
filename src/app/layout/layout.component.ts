
import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './../_nav';
import { Router } from '@angular/router';
import { Note } from '../models/note.model';
import { NoteService } from '../services/note.service';
import { ResponseWrapper } from '../models/response-wrapper.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  @Input() notes: Note[] = [];

    constructor(private router: Router,
            private noteService: NoteService) {
        this.changes = new MutationObserver((mutations) => {
        this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
        });

        this.changes.observe(<Element>this.element, {
        attributes: true
        });
    }

    ngOnInit() {
        this.loadNotesOfUser();
    }

    loadNotesOfUser() {
        this.noteService.getNotesUser().subscribe(
            (res: ResponseWrapper) => {
                this.notes = (res.json).reverse();
            },
            (res: ResponseWrapper) => console.log('Error getting notes of user')
        );
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        this.router.navigate(['/login']);
    }

    receiverNewNote(newNote) {
        this.notes.unshift(newNote);
    }

    receiverInfoNoteDeletedFromList(idNoteDeleted) {
        this.notes = this.notes.filter( function(note) {
            return !(note.id === idNoteDeleted);
        });
    }
}
