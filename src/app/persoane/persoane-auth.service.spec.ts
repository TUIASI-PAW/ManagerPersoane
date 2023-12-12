import { TestBed } from '@angular/core/testing';

import { PersoaneAuthService } from './persoane-auth.service';

describe('PersoaneAuthService', () => {
  let service: PersoaneAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersoaneAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
