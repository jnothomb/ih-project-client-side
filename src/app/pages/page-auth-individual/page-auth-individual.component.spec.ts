import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthIndividualComponent } from './page-auth-individual.component';

describe('PageAuthIndividualComponent', () => {
  let component: PageAuthIndividualComponent;
  let fixture: ComponentFixture<PageAuthIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAuthIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuthIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
