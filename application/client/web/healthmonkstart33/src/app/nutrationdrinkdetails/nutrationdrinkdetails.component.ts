import { Component, OnInit } from '@angular/core';
import { NutrationdrinkdetailsService } from './nutrationdrinkdetails.service';

@Component({
  selector: 'app-nutrationdrinkdetails',
  templateUrl: './nutrationdrinkdetails.component.html',
  styleUrls: ['./nutrationdrinkdetails.component.scss'],
})

export class NutrationdrinkdetailsComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        health: '',
    }

    constructor (
        private nutrationdrinkdetailsService: NutrationdrinkdetailsService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}