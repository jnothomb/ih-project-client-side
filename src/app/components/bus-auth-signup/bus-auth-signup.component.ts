import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { BusinessService } from '../../services/bus.service';


@Component({
  selector: 'app-bus-auth-signup',
  templateUrl: './bus-auth-signup.component.html',
  styleUrls: ['./bus-auth-signup.component.css']
})
export class BusAuthSignupComponent {

  user = new User({
    name: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  error: string;

  constructor(private auth: BusinessService,
    private router: Router) { }


  signup() {
    this.error = null;
    this.auth.signup(this.user).subscribe(
      () => this.router.navigate(['/business']),
      (err) => this.error = err.json().error,
      // () => console.log(this.error),
      () => console.log('signup')
    );
  }


}
