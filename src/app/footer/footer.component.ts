import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { AppState } from '../app.state'; 


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';
import { ActivatedRoute, Router } from '@angular/router';



import { CommonModule, Location } from "@angular/common";

import { cursosjs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from '../app.state'; 


@Component({
    selector: 'app-footer',
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
  //@ViewChild(LoginUsuariosComponent) child;
  contactosjs = contactosjs;
  login: Observable<Tio[]> | undefined;
  tio: Tio | undefined;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  usuariologeado = false;
  cursosjs = cursosjs;
  proyectos_realizados_luis = proyectos_realizados_luis;
 
  constructor(location: Location, private router: Router) {
    
  }


  ngOnInit() {
  }

}
