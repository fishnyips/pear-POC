import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Jobposting from '../models/jobposting.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobListingService {

  api_url = 'http://localhost:1337';
  jobpostingUrl = `${this.api_url}/jobpostings`;
  
  constructor(private http: HttpClient) { }

  getJobpostings(): Observable<Jobposting[]>{
    
    return this.http.get(this.jobpostingUrl)
        .pipe(map(res  => {
          //Maps the response object sent from the server
          console.log(res);
          return res as Jobposting[];
        }))
  }
}
