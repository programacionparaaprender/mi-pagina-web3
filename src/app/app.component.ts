import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import {UntypedFormControl, Validators} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

export interface Brand {
  value: number;
  viewValue: string;
}
Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet, 
    //TodosComponent, 
    MenuComponent,
    FooterComponent
  ],
})
export class AppComponent {
  title = 'mi-pagina-web3';
  brandControl = new UntypedFormControl('', [Validators.required]);
  selectFormControl = new UntypedFormControl('', Validators.required);
  brands: Brand[] = [
    { value: 1, viewValue: 'Louis Vuitton' },
    { value: 2, viewValue: 'Gucci' },
    { value: 3, viewValue: 'Prada' },
    { value: 4, viewValue: 'Chanel' },
  ];
}
