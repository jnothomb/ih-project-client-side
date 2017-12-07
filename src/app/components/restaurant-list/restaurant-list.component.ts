import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  users;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getRestaurants()
      .subscribe((users) => {
        this.users = users;
      });
  }

}
