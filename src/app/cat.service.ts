import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Cat } from './cat';

@Injectable()
export class CatService {

  constructor(private http: Http) { }

  getCats(): Promise<Cat[]> {
    return this.http.get('//localhost:3000/api/cats')
      .toPromise()
      .then(
        response => response.json() as Cat[]
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
