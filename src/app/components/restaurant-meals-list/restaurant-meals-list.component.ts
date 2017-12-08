import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


import { Meal } from '../../models/meal';

@Component({
  selector: 'app-restaurant-meals-list',
  templateUrl: './restaurant-meals-list.component.html',
  styleUrls: ['./restaurant-meals-list.component.css']
})
export class RestaurantMealsListComponent implements OnInit {

  meals;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getRestaurantMeals()
      .subscribe((meals) => {
        this.meals = meals;
      });
  }

}
