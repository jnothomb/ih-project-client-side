import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  @Input() users;
  @Output() category = new EventEmitter();

  selectedCategory: string;
  constructor() { }

  ngOnInit() {
  }

  filterByCategory() {
    this.category.emit(this.selectedCategory);
  }

}
