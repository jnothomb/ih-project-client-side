import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthRestaurantComponent } from './page-auth-restaurant.component';

describe('PageAuthRestaurantComponent', () => {
  let component: PageAuthRestaurantComponent;
  let fixture: ComponentFixture<PageAuthRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAuthRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuthRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
