import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

import { User } from '../../models/user';

@Component({
  selector: 'app-page-restaurant-list',
  templateUrl: './page-restaurant-list.component.html',
  styleUrls: ['./page-restaurant-list.component.css']
})
export class PageRestaurantListComponent implements OnInit {

  users;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getRestaurants()
      .subscribe((users) => {
        this.users = users;
      });
  }

}
