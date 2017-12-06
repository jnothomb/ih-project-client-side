import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProfileIndividualComponent } from './page-profile-individual.component';

describe('PageProfileIndividualComponent', () => {
  let component: PageProfileIndividualComponent;
  let fixture: ComponentFixture<PageProfileIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageProfileIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProfileIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
