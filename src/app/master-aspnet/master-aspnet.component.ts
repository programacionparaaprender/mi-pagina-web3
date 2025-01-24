import { Component } from '@angular/core';
import { MenuNuevoComponent } from '../menu-nuevo/menu-nuevo.component';
import { CommonModule } from '@angular/common';



@Component({
    selector: 'app-master-aspnet',
    imports: [MenuNuevoComponent, CommonModule],
    templateUrl: './master-aspnet.component.html',
    styleUrls: ['./master-aspnet.component.css']
})
export class MasterAspNetComponent  {
  main = 'main'
}
