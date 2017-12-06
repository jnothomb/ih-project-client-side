import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfirmMealsComponent } from './page-confirm-meals.component';

describe('PageConfirmMealsComponent', () => {
  let component: PageConfirmMealsComponent;
  let fixture: ComponentFixture<PageConfirmMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageConfirmMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageConfirmMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
