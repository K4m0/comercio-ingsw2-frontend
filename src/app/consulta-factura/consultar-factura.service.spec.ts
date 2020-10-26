import { TestBed } from '@angular/core/testing';

import { ConsultarFacturaService } from './consultar-factura.service';

describe('ConsultarFacturaService', () => {
  let service: ConsultarFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
