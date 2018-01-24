import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthBusinessComponent } from './page-auth-business.component';

describe('PageAuthBusinessComponent', () => {
  let component: PageAuthBusinessComponent;
  let fixture: ComponentFixture<PageAuthBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAuthBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuthBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
