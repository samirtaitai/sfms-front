import { TestBed } from '@angular/core/testing';

import { StorageRegions } from './storage-regions';

describe('StorageRegions', () => {
  let service: StorageRegions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageRegions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
