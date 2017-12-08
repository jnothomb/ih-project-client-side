import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


import { User } from '../models/user';
import { Meal } from '../models/meal';

@Injectable()
export class UserService {

  baseURL = 'http://localhost:3000';

  constructor(private http: Http) { }

  getRestaurants() {
    return this.http.get(`${this.baseURL}/restaurants`)
      .map((res) => res.json());
  }


  getRestaurantId(id) {
    return this.http.get(`${this.baseURL}/restaurants/${id}`)
      .map((res) => res.json());
  }

  getRestaurantMeals() {
    return this.http.get(`${this.baseURL}/restaurants/:id/meals`)
      .map((res) => res.json());
  }

}
