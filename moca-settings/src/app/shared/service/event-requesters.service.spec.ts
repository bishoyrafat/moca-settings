import { TestBed } from '@angular/core/testing';

import { EventRequestersService } from './event-requesters.service';

describe('EventRequestersService', () => {
  let service: EventRequestersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventRequestersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
