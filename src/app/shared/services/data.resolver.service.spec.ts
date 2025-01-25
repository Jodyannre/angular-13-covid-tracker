import { TestBed } from '@angular/core/testing';

import { Data.ResolverService } from './data.resolver.service';

describe('Data.ResolverService', () => {
  let service: Data.ResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Data.ResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
