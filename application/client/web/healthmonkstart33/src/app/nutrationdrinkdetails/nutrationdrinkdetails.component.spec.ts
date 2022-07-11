import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrationdrinkdetailsComponent } from './nutrationdrinkdetails.component';

describe('NutrationdrinkdetailsComponent', () => {
  let component: NutrationdrinkdetailsComponent;
  let fixture: ComponentFixture<NutrationdrinkdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrationdrinkdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrationdrinkdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});