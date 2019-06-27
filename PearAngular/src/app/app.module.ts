import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponentHeader} from './app.component.header'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StartsWithPipe } from './components/jobsearch/listFilter.pipe'
import { JobListingService } from './services/job-listing.service';
import { ListingComponent } from './components/jobsearch/listing.component'
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './components/homepage/homepage.component';

const appRoutes: Routes = [
  { path: 'jobsearch', component: ListingComponent },
  { path: 'public', component: PublicComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppComponentHeader,
    PublicComponent,
    ListingComponent,
    StartsWithPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [JobListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
