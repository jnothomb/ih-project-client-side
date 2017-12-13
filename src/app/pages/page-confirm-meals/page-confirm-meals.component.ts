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
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idMeal = params['id'];

      this.route.queryParams.subscribe(params =>
        this.quantity = params);

      this.userService.getMeal(this.idMeal)
        .subscribe((meal) => {
          this.meal = meal;
          console.log(this.meal);
          this.totalCost = Number(this.quantity.quantity) * this.meal.price;
        });
    });
    this.route.queryParams.subscribe(params => {
      this.reservation = new Reservation({
        portions: this.quantity
      });
    });
    console.log(this.idMeal, this.quantity.quantity);
  }

  reserveMeal() {
    this.reservation.restaurant = this.meal.restaurant._id;
    this.userService.postReservation(this.idMeal, this.reservation).subscribe(
      () => this.router.navigate(['/reservations']));
  }
}
