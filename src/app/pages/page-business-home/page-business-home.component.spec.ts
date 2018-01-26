import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBusinessHomeComponent } from './page-business-home.component';

describe('PageBusinessHomeComponent', () => {
  let component: PageBusinessHomeComponent;
  let fixture: ComponentFixture<PageBusinessHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBusinessHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBusinessHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
