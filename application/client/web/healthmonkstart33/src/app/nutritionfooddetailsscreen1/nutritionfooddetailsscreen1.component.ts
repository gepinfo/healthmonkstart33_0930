import { Component, OnInit } from '@angular/core';
import { Nutritionfooddetailsscreen1Service } from './nutritionfooddetailsscreen1.service';

@Component({
  selector: 'app-nutritionfooddetailsscreen1',
  templateUrl: './nutritionfooddetailsscreen1.component.html',
  styleUrls: ['./nutritionfooddetailsscreen1.component.scss'],
})

export class Nutritionfooddetailsscreen1Component implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        health: '',
    }

    constructor (
        private nutritionfooddetailsscreen1Service: Nutritionfooddetailsscreen1Service,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}