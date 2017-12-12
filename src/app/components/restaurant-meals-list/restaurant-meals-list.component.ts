import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-restaurant-meals-list',
  templateUrl: './restaurant-meals-list.component.html',
  styleUrls: ['./restaurant-meals-list.component.css']
})
export class RestaurantMealsListComponent implements OnInit {

  @Input() meals;
  quantity;

  constructor() { }

  ngOnInit() {
  }
}
