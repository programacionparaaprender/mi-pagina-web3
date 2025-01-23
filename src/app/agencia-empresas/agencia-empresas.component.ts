import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.state'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tio } from '../models/tio';
import { emprender_internetjs, trabajo_grado_luis, proyectos_realizados_luis, proyectos } from '../app.state';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-agencia-empresas',
  imports:[CommonModule],
  templateUrl: './agencia-empresas.component.html',
  styleUrls: ['./agencia-empresas.component.css']
})


export class AgenciaEmpresasComponent implements OnInit {
    emprender_internetjs = emprender_internetjs;

  trabajo_grado_luis = trabajo_grado_luis;
    proyectos_realizados_luis = proyectos_realizados_luis;
    proyectos = proyectos;
    tecnologia:Array<any> | undefined;

  constructor(private router: Router) { 
    

  }
  
  obtenerDetalleTrabajoGrado(id:number): void{
    console.log('obtenerDetalleTrabajoGrado')
    var proyecto:any;
    for(let proyecto2 of this.trabajo_grado_luis){
            if(proyecto2.id == id){
                    proyecto = proyecto2;
            }
    }
    this.tecnologia = proyecto.tecnologia;
  }

  obtenerDetalle(id:number): void{
    console.log('obtenerDetalle')
    var proyecto:any;
    for(let proyecto2 of this.proyectos_realizados_luis){
            if(proyecto2.id == id){
                    proyecto = proyecto2;
            }
    }
    this.tecnologia = proyecto.tecnologia;
    
};

  
  ngOnInit(): void {
  }

  
}
