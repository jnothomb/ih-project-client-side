import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



import { User } from '../../models/user';

@Component({
  selector: 'app-page-profile-individual',
  templateUrl: './page-profile-individual.component.html',
  styleUrls: ['./page-profile-individual.component.css']
})
export class PageProfileIndividualComponent implements OnInit {
  user;
  id;

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.userService.getUserProfile(this.id)
        .subscribe((user) => {
          this.user = user;
        });
    });

  }

  editProfile() {
    this.userService.editProfile(this.id).subscribe(
      () => console.log('change succesful'));
  }

}
