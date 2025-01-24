import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';


@Component({
    selector: 'app-arms',
    imports: [CommonModule],
    templateUrl: './arms.component.html',
    styleUrls: ['./arms.component.css']
})
export class ArmsComponent {
  title = '';
  descripcion = '';
  constructor(){
    this.title = 'Brazos perfectos';
    this.descripcion = 'Los ejercicios para los brazos son muy importantes.';
  }
}
