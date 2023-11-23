import { TestBed } from '@angular/core/testing';

import { SampLibrService } from './samp-libr.service';

describe('SampLibrService', () => {
  let service: SampLibrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampLibrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
