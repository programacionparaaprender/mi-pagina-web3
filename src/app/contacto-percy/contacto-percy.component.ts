import { Component, OnInit } from '@angular/core';

//import { LatLng, LatLngLiteral, PolyMouseEvent } from '../services/google-maps-types';
 

import { Router } from '@angular/router';

import { AppState } from '../app.state'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from '../app.state';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-contacto-percy',
    imports: [CommonModule],
    templateUrl: './contacto-percy.component.html',
    styleUrls: ['./contacto-percy.component.css']
})


export class ContactoPercyComponent implements OnInit {
    emprender_internetjs = emprender_internetjs;
    contactosjs = contactosjs;
    trabajo_grado_luis = trabajo_grado_luis;
    experiencia_luis = experiencia_luis;
    proyectos_realizados_luis = proyectos_realizados_luis;
    proyectos = proyectos;
    tecnologia:[] = [];
    constructor(private router: Router) { 
    

    }
  
    ngOnInit(): void {
    }

  
}
