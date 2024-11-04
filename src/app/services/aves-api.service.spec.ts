import { TestBed } from '@angular/core/testing';

import { AvesApiService } from './aves-api.service';

describe('AvesApiService', () => {
  let service: AvesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
