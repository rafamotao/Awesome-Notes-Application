import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Note } from '../models/note.model';
import { HttpUtilService } from './http-util.service';
import { ResponseWrapper } from '../models/response-wrapper.model';

@Injectable()
export class NoteService {

    private resourceUrl =  'notes';

    constructor(private http: Http,
                private httpUtil: HttpUtilService) { }

    create(note: Note): Observable<Note> {
        const copy = this.convert(note);
        return this.http.post(this.httpUtil.url(this.resourceUrl), copy, this.httpUtil.headers()).map((res: Response) => {
            const jsonResponse = res.json();
            console.log(jsonResponse);
            return this.convertItemFromServer(jsonResponse);
        });
    }

    update(note: Note): Observable<Note> {
        const copy = this.convert(note);
        return this.http.put(this.httpUtil.url(this.resourceUrl), copy, this.httpUtil.headers()).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    find(id: number): Observable<Note> {
        return this.http.get(`${this.httpUtil.url(this.resourceUrl)}/${id}`, this.httpUtil.headers()).map((res: Response) => {
            const jsonResponse = res.json();
            return this.convertItemFromServer(jsonResponse);
        });
    }

    getNotesUser(): Observable<ResponseWrapper> {
        return this.http.get(this.httpUtil.url(`${this.resourceUrl}/user/${localStorage['id']}`), this.httpUtil.headers())
            .map((res: Response) => this.convertResponse(res));
    }

    query(req?: any): Observable<ResponseWrapper> {
        return this.http.get(this.httpUtil.url(this.resourceUrl), this.httpUtil.headers())
            .map((res: Response) => this.convertResponse(res));
    }

    delete(id: number): Observable<Response> {
        return this.http.delete(`${this.httpUtil.url(this.resourceUrl)}/${id}`, this.httpUtil.headers());
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        const result = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            result.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return new ResponseWrapper(res.headers, result, res.status);
    }

    /**
     * Convert a returned JSON object to Note.
     */
    private convertItemFromServer(json: any): Note {
        const entity: Note = Object.assign(new Note(), json);
        return entity;
    }

    /**
     * Convert a Note to a JSON which can be sent to the server.
     */
    private convert(note: Note): Note {
        const copy: Note = Object.assign({}, note);
        return copy;
    }
}
