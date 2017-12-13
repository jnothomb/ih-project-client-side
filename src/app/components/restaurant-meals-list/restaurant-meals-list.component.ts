import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-restaurant-meals-list',
  templateUrl: './restaurant-meals-list.component.html',
  styleUrls: ['./restaurant-meals-list.component.css']
})
export class RestaurantMealsListComponent implements OnInit {

  @Input() meals;
  quantity;
  feedbackEnabled = false;

  errorManager = [];
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  reserveMeal(form, inputField, meal, ix) {
    this.feedbackEnabled = true;

    if (form.invalid) {
      return;
    } else {
      if (inputField.value > meal.availablePortions) {
        console.log('u cant!');
        inputField.value = null;
        this.errorManager[ix] = true;
      } else {
        this.router.navigate(['/meal', meal._id, 'confirm'], { queryParams: { quantity: inputField.value } });
      }
    }
  }
}
