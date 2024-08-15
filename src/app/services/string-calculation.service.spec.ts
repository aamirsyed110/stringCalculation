import { TestBed } from '@angular/core/testing';

import { StringCalculationService } from './string-calculation.service';

describe('StringCalculationService', () => {
  let service: StringCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
