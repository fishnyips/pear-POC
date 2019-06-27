import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Jobposting from '../../models/jobposting.model';
import { JobListingService } from '../../services/job-listing.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router'

@Component({
  selector: 'jobsearch',
  templateUrl: './jobsearch.component.html'
})


@Injectable()
export class ListingComponent implements OnInit {
  public searchText : string;
  postings: Jobposting[];
  locations: [];

  ngOnInit(): void {
    console.log('fetching');
    this.fetchJobs();
    $(document).on('click', '.btn-outline-secondary', function(){
      console.log(99);
      let colour = $(this).css("border-color");
      $('.btn-outline-secondary').removeClass('active_button');
      $('.btn-outline-secondary').css('color', 'white');
      $(this).addClass('active_button');
      $(this).css('color', colour);
    });
    //Home button active on page load

    let colour = $('#all-butt').css("background-color");
    $('#all-butt').css('color', colour);
    $('#all-butt').addClass('active_button');


    $('.switch').on('click', function() {
      let curr = $(this).text();
      if (curr === 'Listview') {
        $('.job-cards').css('display', 'block');
        $('.job-rows').css('display', 'none');
        $('.switch').html('Cardview');
      } else {
        $('.job-cards').css('display', 'none');
        $('.job-rows').css('display', 'block');
        $('.switch').html('Listview');
      }
    });


  }

  fetchJobs() {
    console.log(9999);
    this.listingService
    .getJobpostings()
    .subscribe((data: Jobposting[]) => {
      this.postings = data;
      console.log('Data requested ... ');
      console.log(this.postings);
    });
  }

  constructor(private listingService: JobListingService, private router: Router) { }



  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
