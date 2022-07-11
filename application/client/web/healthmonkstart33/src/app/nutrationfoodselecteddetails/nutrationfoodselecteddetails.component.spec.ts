import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrationfoodselecteddetailsComponent } from './nutrationfoodselecteddetails.component';

describe('NutrationfoodselecteddetailsComponent', () => {
  let component: NutrationfoodselecteddetailsComponent;
  let fixture: ComponentFixture<NutrationfoodselecteddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrationfoodselecteddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrationfoodselecteddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});