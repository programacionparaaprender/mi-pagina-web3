import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { MaestriaSanMarcosComponent } from '../maestria-sanmarcos/maestria-sanmarcos.component';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-menu-nuevo',
    imports: [MainComponent, MaestriaSanMarcosComponent, CommonModule],
    templateUrl: './menu-nuevo.component.html',
    styleUrls: ['./menu-nuevo.component.css']
})
export class MenuNuevoComponent  {
  @Input() texto = 'login';
}
