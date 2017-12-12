import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { Meal } from '../../models/meal';
import { Reservation } from '../../models/reservation';
@Component({
  selector: 'app-page-confirm-meals',
  templateUrl: './page-confirm-meals.component.html',
  styleUrls: ['./page-confirm-meals.component.css']
})
export class PageConfirmMealsComponent implements OnInit {
  meal;
  idMeal;
  reservation;
  quantity;
  totalCost;

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idMeal = params['id'];

      this.route.queryParams.subscribe(params =>
        this.quantity = params);

      this.userService.getMeal(this.idMeal)
        .subscribe((meal) => {
          this.meal = meal;
        });
    });
    this.route.queryParams.subscribe(params => {
      this.reservation = new Reservation({
        portions: this.quantity
      });

      // this.totalCost = this.quantity * this.meal.price;

    });
    console.log(this.idMeal, this.quantity.quantity);
  }

  reserveMeal() {
    this.userService.postReservation(this.idMeal, this.reservation).subscribe(
      () => console.log('confirm'));
  }

  calculatePrice() {
    this.totalCost = this.quantity * this.meal.price;
  }
}
