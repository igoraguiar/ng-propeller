import { TestBed, inject } from '@angular/core/testing';

import { PmdAlertService } from './pmd-alert.service';

describe('PmdAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PmdAlertService]
    });
  });

  it('should be created', inject([PmdAlertService], (service: PmdAlertService) => {
    expect(service).toBeTruthy();
  }));
});
