import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  user = new User({
    email: '',
    password: ''
  });

  error: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.error = null;
    this.authService.login(this.user)
      .subscribe(
      () => this.router.navigate(['/restaurants']),
      (err) => this.error = err,
      () => console.log(this.error)
      );
  }
}
