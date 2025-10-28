import { TestBed } from '@angular/core/testing';

import { FileTypes } from './file-types';

describe('FileTypes', () => {
  let service: FileTypes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileTypes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
