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


  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  reserveMeal(form, quantity, id) {
    this.feedbackEnabled = true;

    if (form.invalid) {
      return;
    } else {
      this.router.navigate(['/meal', id, 'confirm'], { queryParams: { quantity } });
    }
  }
}
