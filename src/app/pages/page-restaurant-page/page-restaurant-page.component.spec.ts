import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRestaurantPageComponent } from './page-restaurant-page.component';

describe('PageRestaurantPageComponent', () => {
  let component: PageRestaurantPageComponent;
  let fixture: ComponentFixture<PageRestaurantPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRestaurantPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRestaurantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
