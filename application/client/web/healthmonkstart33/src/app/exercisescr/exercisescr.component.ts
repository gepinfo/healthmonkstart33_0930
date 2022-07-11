import { Component, OnInit } from '@angular/core';
import { ExercisescrService } from './exercisescr.service';

@Component({
  selector: 'app-exercisescr',
  templateUrl: './exercisescr.component.html',
  styleUrls: ['./exercisescr.component.scss'],
})

export class ExercisescrComponent implements OnInit {
    public workoutdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        morning_time: '',
    }

    constructor (
        private exercisescrService: ExercisescrService,
    ) { }

    ngOnInit() {
        this.workoutdetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}