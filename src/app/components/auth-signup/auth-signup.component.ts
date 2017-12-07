import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent {

  user = new User({
    email: '',
    password: '',
    phoneNumber: null
  });

  error: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  signup() {
    this.error = null;
    this.auth.signup(this.user).subscribe(
      () => this.router.navigate(['/restaurants']),
      (err) => this.error = err
    );
  }
}
