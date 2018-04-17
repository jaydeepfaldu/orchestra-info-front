import { TestBed, inject } from '@angular/core/testing';

import { OrchestraMIEndpointService } from './OrchestraMIEndpointService.service';

describe('OrchestrarestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrchestraMIEndpointService]
    });
  });

  it('should be created', inject([OrchestraMIEndpointService], (service: OrchestraMIEndpointService) => {
    expect(service).toBeTruthy();
  }));
});
