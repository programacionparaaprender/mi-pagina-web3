import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { AppState } from '../app.state'; 

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';



import { CommonModule, Location } from "@angular/common";

import { cursosjs, experiencia_luis, contactosjs, emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from '../app.state';



@Component({
    selector: 'app-menu',
    imports: [RouterModule, CommonModule],
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  //@ViewChild(LoginUsuariosComponent) child;

  login: Observable<Tio[]> | undefined;
  tio: Tio | undefined;
  nombre = '';
  email = 'zddfdfdsfd';
  password = '';
  usuariologeado = false;
  cursosjs = cursosjs;
  proyectos_realizados_luis = proyectos_realizados_luis;
  contactosjs = contactosjs;
  constructor(location: Location, private router: Router) {
    
  }


  ngOnInit() {
  }

}
