import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpUtilService } from './http-util.service';

@Injectable()
export class RegisterService {

    constructor(private http: Http,
                private httpUtil: HttpUtilService) {}

    save(account: any): Observable<any> {
        return this.http.post(this.httpUtil.url('register'), account);
    }
}
