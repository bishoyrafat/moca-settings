/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoreAppService } from './coreApp.service';

describe('Service: CoreApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoreAppService]
    });
  });

  it('should ...', inject([CoreAppService], (service: CoreAppService) => {
    expect(service).toBeTruthy();
  }));
});
