import { TestBed } from '@angular/core/testing';

import { GestionVehiculos } from './gestion-vehiculos';

describe('GestionVehiculos', () => {
  let service: GestionVehiculos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionVehiculos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
