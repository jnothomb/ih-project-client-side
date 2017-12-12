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

  // reservation = new Reservation({
  //   client: req.user,
  //   meal: req.params._id
  // portions: vfvfd,   // dunno yet
  // });

  constructor(private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.userService.getMeal(id)
        .subscribe((meal) => {
          this.meal = meal;
        });
    });
  }

  // reserveMeal() {
  //   this.route.params.subscribe(params => {
  //     const id = params['id'];
  //     this.userService.postReservation(id).subscribe(
  //       () => this.router.navigate([''])
  //     );
  //   });

  // }
}
