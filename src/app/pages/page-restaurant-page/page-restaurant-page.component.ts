import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import { Meal } from '../../models/meal';
import { User } from '../../models/user';


@Component({
  selector: 'app-page-restaurant-page',
  templateUrl: './page-restaurant-page.component.html',
  styleUrls: ['./page-restaurant-page.component.css']
})
export class PageRestaurantPageComponent implements OnInit {

  meals = [{
    name: 'fooo',
    portions: 2,
    price: 3,
    restaurant: '5a2ab9245772271d2056943e',
    availablePortions: 3];
  user;

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // this.userService.getRestaurantMeals(id)
      //   .subscribe((meals) => {
      //     this.meals = meals;

      //   });
      this.userService.getRestaurantId(id)
        .subscribe((user) => {
          this.user = user;
        });
    });






  }

}
