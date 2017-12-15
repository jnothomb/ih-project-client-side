import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl;


import { User } from '../models/user';
import { Meal } from '../models/meal';

@Injectable()
export class UserService {

  baseURL = apiUrl;

  constructor(private http: Http) { }

  getRestaurants() {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.get(`${this.baseURL}/restaurants`, options)
      .map((res) => res.json());
  }


  getRestaurantId(id) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.get(`${this.baseURL}/restaurants/${id}`, options)
      .map((res) => res.json());
  }

  getRestaurantMeals(id) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.get(`${this.baseURL}/restaurants/${id}/meals`, options)
      .map((res) => res.json());
  }

  getMeal(id) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.get(`${this.baseURL}/meal/${id}`, options)
      .map((res) => res.json());
  }

  postReservation(id, reservation) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.post(`${this.baseURL}/meal/${id}/confirm`, reservation, options)
      .map((res) => res.json());
  }


  getUserProfile(id) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.get(`${this.baseURL}/edit-profile/${id}`, options)
      .map((res) => res.json());
  }


  editProfile(user) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.post(`${this.baseURL}/edit-profile`, user, options)
      .map((res) => res.json());
  }

  getReservations() {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.get(`${this.baseURL}/reservations`, options)
      .map((res) => res.json());
  }

  filterByCategory(category) {
    const options = new RequestOptions();
    options.withCredentials = true;

    return this.http.get(`${this.baseURL}/category/${category}`, options)
      .map((res) => res.json());
  }
}


