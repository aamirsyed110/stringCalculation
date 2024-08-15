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

  it('should return 0 for an empty string', () => {
    expect(service.add('')).toEqual(0);
  });

  it('should return the number itself for a single number', () => {
    expect(service.add('1')).toEqual(1);
  });

  it('should return the sum of two numbers', () => {
    expect(service.add('1,2')).toEqual(3);
  });
});
