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


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getRestaurants()
      .subscribe((users) => {
        this.users = users;
      });
  }

  filterByCategory(category) {
    console.log(category);
    this.userService.filterByCategory(category).subscribe(data => {
      console.log('data', data);
      this.users = data;
    });
  }

}
