import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusAuthLoginComponent } from './bus-auth-login.component';

describe('BusAuthLoginComponent', () => {
  let component: BusAuthLoginComponent;
  let fixture: ComponentFixture<BusAuthLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusAuthLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusAuthLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
