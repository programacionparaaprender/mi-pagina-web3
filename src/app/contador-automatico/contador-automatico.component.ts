import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-contador-automatico',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './contador-automatico.component.html',
  styleUrls: ['./contador-automatico.component.css']
})
export class ContadorAutomaticoComponent {
  tiempo = 0;
  subscribe: any = null;
  constructor() { 
  }

  iniciar():void {
    //emit 0 after 1 second then complete, since no second argument is supplied
    const source = timer(0, 1000);
    this.tiempo = 0;
    if(this.subscribe != null){
      if(!this.subscribe.isStopped){
        this.subscribe.unsubscribe();
      }
    }
    this.subscribe = source.subscribe((val) => {
      this.tiempo = val;
    });
  }

  detener():void {
    if(this.subscribe != null){
      if(!this.subscribe.isStopped){
        this.subscribe.unsubscribe();
      }
    }
  }
    
}
