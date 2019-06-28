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
    if ($(this).parents('.nav-menu').length) {
      $('.nav-menu .menu-active').removeClass('menu-active');
      $(this).closest('li').addClass('menu-active');
    }

  }
  title = 'PearAngular';
}
