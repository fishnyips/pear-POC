import { Component, OnInit } from '@angular/core';
import Jobposting from '../../models/jobposting.model';


@Component({
  selector: 'public',
  templateUrl: './homepage.component.html'
})
export class PublicComponent implements OnInit{
  constructor() { }

  public newJobposting: Jobposting = new Jobposting()

  jobPostingList: Jobposting[];

  ngOnInit(): void {
    
  }
  title = 'PearAngular';
}
