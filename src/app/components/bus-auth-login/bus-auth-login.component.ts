import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BusinessService } from '../../services/bus.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-bus-auth-login',
  templateUrl: './bus-auth-login.component.html',
  styleUrls: ['./bus-auth-login.component.css']
})
export class BusAuthLoginComponent implements OnInit {


  user = new User({
    email: '',
    password: ''
  });

  error: string;

  constructor(private authService: BusinessService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.error = null;
    this.authService.login(this.user)
      .subscribe(
      () => this.router.navigate(['/business']),
      (err) => this.error = err,
      () => console.log(this.error)
      );
  }
}
