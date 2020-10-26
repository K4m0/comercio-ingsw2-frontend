import { TestBed } from '@angular/core/testing';

import { ConsultarServicioService } from './consultar-servicio.service';

describe('ConsultarServicioService', () => {
  let service: ConsultarServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
