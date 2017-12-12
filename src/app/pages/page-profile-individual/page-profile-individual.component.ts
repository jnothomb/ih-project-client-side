import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

import { User } from '../../models/user';

@Component({
  selector: 'app-page-profile-individual',
  templateUrl: './page-profile-individual.component.html',
  styleUrls: ['./page-profile-individual.component.css']
})
export class PageProfileIndividualComponent implements OnInit {
  user;
  id;
  error;
  feedbackEnabled = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.user = this.authService.getUser();
    this.authService.me()
      .then((user) => {
        this.user = user;
      });
  }

  editProfile(form) {
    this.feedbackEnabled = true;
    if (form.invalid) {
      return;
    }
    this.userService.editProfile(this.user._id).subscribe(
      () => console.log('change succesful'),
      (err) => this.error = err // @toio how to capture the bqackend error message (is somehere inside the "err" vadiable)
    );
  }

}
