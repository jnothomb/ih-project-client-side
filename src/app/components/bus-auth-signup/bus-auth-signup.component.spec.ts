import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusAuthSignupComponent } from './bus-auth-signup.component';

describe('BusAuthSignupComponent', () => {
  let component: BusAuthSignupComponent;
  let fixture: ComponentFixture<BusAuthSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusAuthSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusAuthSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
