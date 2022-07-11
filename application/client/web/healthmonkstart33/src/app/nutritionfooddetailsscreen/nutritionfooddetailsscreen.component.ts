import { Component, OnInit } from '@angular/core';
import { NutritionfooddetailsscreenService } from './nutritionfooddetailsscreen.service';

@Component({
  selector: 'app-nutritionfooddetailsscreen',
  templateUrl: './nutritionfooddetailsscreen.component.html',
  styleUrls: ['./nutritionfooddetailsscreen.component.scss'],
})

export class NutritionfooddetailsscreenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        health: '',
    }

    constructor (
        private nutritionfooddetailsscreenService: NutritionfooddetailsscreenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}