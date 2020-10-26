import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Factura } from '../models/factura';
import { ConsultarFacturaService } from './consultar-factura.service';

@Component({
  selector: 'app-consulta-factura',
  templateUrl: './consulta-factura.component.html',
  styleUrls: ['./consulta-factura.component.css']
})
export class ConsultaFacturaComponent implements OnInit {

  factura: Factura = {};
  private servicioUsuarioId: number;
  
  constructor(private Activatedroute: ActivatedRoute, private facturaService: ConsultarFacturaService) {
    this.servicioUsuarioId = Number(this.Activatedroute.snapshot.queryParamMap.get('servicioUsuarioId'));
   }

  ngOnInit(): void {
    this.getFactura();
  }


  getFactura(): void{
    this.facturaService.getFactura(this.servicioUsuarioId).subscribe(
      factura => this.factura = factura[0]
    );
    
  }
  
}
