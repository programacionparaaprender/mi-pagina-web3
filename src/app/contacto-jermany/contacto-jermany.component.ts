import { Component, OnInit } from '@angular/core';
import { contactosjs } from '../app.state';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contacto-jermany',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './contacto-jermany.component.html',
  styleUrls: ['./contacto-jermany.component.css']
})


export class ContactoJermanyComponent implements OnInit {
    contactosjs = contactosjs;

    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
