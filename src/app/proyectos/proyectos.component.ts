import { Component, OnInit } from '@angular/core';

import { serviciosjs, cursosjs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from './../app.state';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-proyectos',
    imports: [CommonModule],
    templateUrl: './proyectos.component.html',
    styleUrls: ['./proyectos.component.css']
})


export class ProyectosComponent implements OnInit {
    descripcion_p = {
      titulo:"Proyectos",
      descripcion:"Los siguientes proyectos fueron desarrollados"
    };
    servicios = serviciosjs;
    contactos = contactosjs;
    proyectos_realizados_luis = proyectos_realizados_luis;
    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
