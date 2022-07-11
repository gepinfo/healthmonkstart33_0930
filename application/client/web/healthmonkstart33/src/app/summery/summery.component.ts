import { Component, OnInit } from '@angular/core';
import { SummeryService } from './summery.service';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.scss'],
})

export class SummeryComponent implements OnInit {
    public personname = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        firstname: '',
    }

    constructor (
        private summeryService: SummeryService,
    ) { }

    ngOnInit() {
        this.personname.created_by = sessionStorage.getItem('email') || ''; 
    }
}