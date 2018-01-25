import { TestBed, inject } from '@angular/core/testing';

import { FireBaseServiceService } from './fire-base-service.service';

describe('FireBaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireBaseServiceService]
    });
  });

  it('should be created', inject([FireBaseServiceService], (service: FireBaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
