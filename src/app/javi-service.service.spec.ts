import { TestBed } from '@angular/core/testing';

import { JaviServiceService } from './javi-service.service';

describe('JaviServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JaviServiceService = TestBed.get(JaviServiceService);
    expect(service).toBeTruthy();
  });
});
