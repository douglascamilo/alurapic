import { TestBed } from '@angular/core/testing';

import { GreetingInstanceService } from './greeting-instance.service';

describe('GreetingInstanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GreetingInstanceService = TestBed.get(GreetingInstanceService);
    expect(service).toBeTruthy();
  });
});
