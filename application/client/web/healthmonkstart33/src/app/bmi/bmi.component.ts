import { Component, OnInit } from '@angular/core';
import { BmiService } from './bmi.service';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss'],
})

export class BmiComponent implements OnInit {
    public personname = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        firstname: '',
    }

    constructor (
        private bmiService: BmiService,
    ) { }

    ngOnInit() {
        this.personname.created_by = sessionStorage.getItem('email') || ''; 
    }
}