import { Component, OnInit } from '@angular/core';
import { contactosjs } from '../app.state';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contacto-ana',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './contacto-ana.component.html',
  styleUrls: ['./contacto-ana.component.css']
})


export class ContactoAnaComponent implements OnInit {
    contactosjs = contactosjs;

    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
