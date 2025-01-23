import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { ServiciosContactoComponent } from '../servicios-contacto/servicios-contacto.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';



@Component({
  selector: 'app-main',
  standalone: true,
  imports:[BannerComponent, ServiciosContactoComponent, NosotrosComponent, ProyectosComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent implements OnInit {

    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
