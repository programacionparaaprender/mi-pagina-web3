import { Component, OnInit } from '@angular/core';

import { serviciosjs, cursosjs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from '../app.state';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})


export class NosotrosComponent implements OnInit {
    servicios = serviciosjs;
    contactos = contactosjs;
    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
