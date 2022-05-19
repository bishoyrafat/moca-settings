/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TopUpService } from './topUp.service';

describe('Service: TopUp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopUpService]
    });
  });

  it('should ...', inject([TopUpService], (service: TopUpService) => {
    expect(service).toBeTruthy();
  }));
});
