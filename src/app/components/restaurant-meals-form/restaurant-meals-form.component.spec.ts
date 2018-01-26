import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMealsFormComponent } from './restaurant-meals-form.component';

describe('RestaurantMealsFormComponent', () => {
  let component: RestaurantMealsFormComponent;
  let fixture: ComponentFixture<RestaurantMealsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMealsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMealsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
