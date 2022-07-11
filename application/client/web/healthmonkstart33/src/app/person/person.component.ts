import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})

export class PersonComponent implements OnInit {
    public personname = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        firstname: '',
    }

    constructor (
        private personService: PersonService,
    ) { }

    ngOnInit() {
        this.personname.created_by = sessionStorage.getItem('email') || ''; 
    }
}