import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusProfileComponent } from './bus-profile.component';

describe('BusProfileComponent', () => {
  let component: BusProfileComponent;
  let fixture: ComponentFixture<BusProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
