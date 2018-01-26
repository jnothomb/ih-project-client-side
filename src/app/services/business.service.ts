import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


import { User } from '../models/user';
import { Meal } from '../models/meal';
import { Reservation } from '../models/reservation';

const baseURL = 'http://localhost:3000';

@Injectable()
export class BusinessAppService {
  private user: User;

  baseURL = 'http://localhost:3000';

  constructor(private http: Http) { }



  getUserProfile() {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.get(`${this.baseURL}/business`, options)
      .map((res) => res.json());
  }

}
