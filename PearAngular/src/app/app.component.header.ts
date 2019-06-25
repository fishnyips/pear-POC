import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-navbar',
    templateUrl: './app.component.header.html'
})
export class AppComponentHeader implements OnInit{
  constructor(
  ) { }

  ngOnInit(): void {
    console.log(8888);
    
  }
  title = 'PearAngular';
}
