import { TestBed, inject } from '@angular/core/testing';

import { RepositoriosService } from './repositorios.service';

describe('RepositoriosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepositoriosService]
    });
  });

  it('should be created', inject([RepositoriosService], (service: RepositoriosService) => {
    expect(service).toBeTruthy();
  }));
});
