import { Component, OnInit } from '@angular/core';
import { NutrationfoodselecteddetailsService } from './nutrationfoodselecteddetails.service';

@Component({
  selector: 'app-nutrationfoodselecteddetails',
  templateUrl: './nutrationfoodselecteddetails.component.html',
  styleUrls: ['./nutrationfoodselecteddetails.component.scss'],
})

export class NutrationfoodselecteddetailsComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        health: '',
    }

    constructor (
        private nutrationfoodselecteddetailsService: NutrationfoodselecteddetailsService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}