import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppSettings } from '../models/appSettings';
import { Authentication } from '../models/authentication';
import { Factura } from '../models/factura';
import { Transaction } from '../models/transaction';
import { ConsultarFacturaService } from './consultar-factura.service';
import { DOCUMENT } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-consulta-factura',
  templateUrl: './consulta-factura.component.html',
  styleUrls: ['./consulta-factura.component.css']
})
export class ConsultaFacturaComponent implements OnInit {
  disabled: boolean = true;
  factura: Factura = {};
  private servicioUsuarioId: number;

  private auth : Authentication = {
    username: AppSettings.GATEWAY_USERNAME,
    password: AppSettings.GATEWAY_PASSWORD,
    rol: [AppSettings.GATEWAY_ROLE]
  } 
  private transaction: Transaction;
  
  constructor(private Activatedroute: ActivatedRoute, private facturaService: ConsultarFacturaService,private router: Router,@Inject(DOCUMENT) private document: Document) {
    this.servicioUsuarioId = Number(this.Activatedroute.snapshot.queryParamMap.get('servicioUsuarioId'));
   }

  ngOnInit(): void {
    this.getFactura();
  }

  updateFactura(): void{
    
    this.facturaService.estadoFactura(this.factura.id).subscribe(
      fact => {
        this.factura.Estado_Factura.EstadoPago = fact[fact.length - 1].estado;

        this.facturaService.updateFactura(this.factura).subscribe(
          updt => console.log(updt)
        );

        if (this.factura.Estado_Factura.EstadoPago == "SIN PAGAR") {
          this.disabled = false;
        }
      }
    );

    
  }

  getFactura(): void{
    this.facturaService.getFactura(this.servicioUsuarioId).subscribe(
      factura => {
        this.factura = factura[0];
        this.updateFactura();
        
      }
    );

    this.facturaService.gatewayAuthentication(this.auth).subscribe(
      auth => this.auth = auth
    );
      
    
  }

  processPayment(): void {
  
    if (typeof this.auth.bearerToken != 'undefined' && this.auth.bearerToken) {
      this.facturaService.processPayment(this.factura, this.auth.bearerToken).subscribe(trans =>{
        this.transaction = trans;
        console.log(this.transaction.urlRetorno);
        this.redirect(this.transaction.urlRetorno == null ? "http://www.google.com.co":this.transaction.urlRetorno)
      });
    }
  
  }

  redirect(url: string): void{
    console.log(url); 
    this.document.location.href = url
  }
  
}
