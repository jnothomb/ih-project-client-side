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
  error;
  feedbackEnabled = false;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.user = this.authService.getUser();
    this.authService.me()
      .then((user: any) => {
        this.userService.getUserProfile(user._id)
          .subscribe((data) => {
            console.log(data);
            this.user = data;
          });
      });
  }

  editProfile(form) {
    this.feedbackEnabled = true;
    if (form.invalid) {
      return;
    }
    this.userService.editProfile(this.user).subscribe(
      (data) => {
        this.user = data;
        console.log(data);
      },
      (err) => this.error = err,
      () => this.router.navigate(['/restaurants']));
  }

}
