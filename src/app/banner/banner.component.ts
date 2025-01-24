import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
    selector: 'app-banner',
    imports: [CommonModule],
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})


export class BannerComponent implements OnInit {

    constructor() { 
    

    }
  
    ngOnInit(): void {
    }

  
}
