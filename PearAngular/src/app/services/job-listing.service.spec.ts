import { TestBed } from '@angular/core/testing';

import { JobListingService } from './job-listing.service';

describe('JobListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobListingService = TestBed.get(JobListingService);
    expect(service).toBeTruthy();
  });
});
