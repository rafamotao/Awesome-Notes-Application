import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpUtilService {

  private SERVER_API_URL = 'http://localhost:8080/api/';

  url(path: string) {
    return this.SERVER_API_URL + path;
  }

  headers() {
    const headersParams = { 'Content-Type': 'application/json' };
    if (localStorage['token']) {
      headersParams['Authorization'] = `${'Bearer '}${localStorage['token']}`;
    }
    const headersList = new Headers(headersParams);
    const options = new RequestOptions({
      headers: headersList,
    });
    return options;
  }

  extractData(response: Response) {
    const data = response.json();
    return data || {};
  }

  catchError(erro?: any) {
      return Observable.throw('error');
  }
}
