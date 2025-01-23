import { Component, OnInit } from '@angular/core';

//import { LatLng, LatLngLiteral, PolyMouseEvent } from '../services/google-maps-types';
 

import { Router } from '@angular/router';

import { AppState } from '../app.state'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';


import { experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from '../app.state';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contacto-luis',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './contacto-luis.component.html',
  styleUrls: ['./contacto-luis.component.css']
})


export class ContactoLuisComponent implements OnInit {
    emprender_internetjs = emprender_internetjs;
    contactosjs = contactosjs;
    trabajo_grado_luis = trabajo_grado_luis;
    experiencia_luis = experiencia_luis;
    proyectos_realizados_luis = proyectos_realizados_luis;
    proyectos = proyectos;
    tecnologia:any[] = [{porcentaje:100}];
    constructor(private router: Router) { 
    

    }
    obtenerDetalleTrabajoGrado(id:any):void{

    }
    ngOnInit(): void {
    }

  
}
