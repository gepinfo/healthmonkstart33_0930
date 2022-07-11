import { Component, OnInit } from '@angular/core';
import { ActiveService } from './active.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss'],
})

export class ActiveComponent implements OnInit {
    public personname = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        firstname: '',
    }

    constructor (
        private activeService: ActiveService,
    ) { }

    ngOnInit() {
        this.personname.created_by = sessionStorage.getItem('email') || ''; 
    }
}