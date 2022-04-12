import { TestBed } from '@angular/core/testing';

import { HealthformService } from './healthform.service';

describe('HealthformService', () => {
  let service: HealthformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
