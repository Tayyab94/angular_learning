import { TestBed } from '@angular/core/testing';

import { CounterWithSingleService } from './counter-with-single-service';

describe('CounterWithSingleService', () => {
  let service: CounterWithSingleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterWithSingleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
