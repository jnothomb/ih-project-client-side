import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRestaurantListComponent } from './page-restaurant-list.component';

describe('PageRestaurantListComponent', () => {
  let component: PageRestaurantListComponent;
  let fixture: ComponentFixture<PageRestaurantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRestaurantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
