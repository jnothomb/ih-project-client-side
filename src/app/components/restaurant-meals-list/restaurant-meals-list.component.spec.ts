import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMealsListComponent } from './restaurant-meals-list.component';

describe('RestaurantMealsListComponent', () => {
  let component: RestaurantMealsListComponent;
  let fixture: ComponentFixture<RestaurantMealsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMealsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMealsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
