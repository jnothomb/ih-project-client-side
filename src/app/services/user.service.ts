import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/catch';

import { User } from '../models/user';

const apiUrl = 'http://localhost:3000/auth';

@Injectable()
export class UserService {

  baseURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  getRestaurants() {
    return this.http.get(`${this.baseURL}/restaurants`)
      .map((res) => res.json());
  }

}
