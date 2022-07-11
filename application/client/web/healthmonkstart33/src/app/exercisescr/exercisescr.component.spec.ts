import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisescrComponent } from './exercisescr.component';

describe('ExercisescrComponent', () => {
  let component: ExercisescrComponent;
  let fixture: ComponentFixture<ExercisescrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExercisescrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisescrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});