import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

const authUrl = 'http://localhost:3000/business/auth';

import { User } from '../models/user';


@Injectable()
export class BusinessService {

  private user: User;


  constructor(private http: Http) { }


  private setUser(user: User = null) {
    this.user = user;
  }


  signup(user: User) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(authUrl + '/signup', user, options)
      .map(res => {
        this.setUser(new User(res.json()));
        return user;
      });
  }


  login(user: User) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(authUrl + '/login', user, options)
      .map(res => {
        this.setUser(new User(res.json()));
        return user;
      });
  }


  logout() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(authUrl + '/logout', {}, options)
      .map(res => {
        this.setUser();
        return null;
      });
  }

  me() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(authUrl + '/me', options)
      .toPromise()
      .then(res => {
        const user = new User(res.json());
        this.setUser(user);
        return user;
      })
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

}
