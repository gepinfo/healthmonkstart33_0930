import { Component, OnInit } from '@angular/core';
import { SavemealpopupscreenService } from './savemealpopupscreen.service';

@Component({
  selector: 'app-savemealpopupscreen',
  templateUrl: './savemealpopupscreen.component.html',
  styleUrls: ['./savemealpopupscreen.component.scss'],
})

export class SavemealpopupscreenComponent implements OnInit {
    public nutritiondetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        health: '',
    }

    constructor (
        private savemealpopupscreenService: SavemealpopupscreenService,
    ) { }

    ngOnInit() {
        this.nutritiondetails.created_by = sessionStorage.getItem('email') || ''; 
    }
}