import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { AppSettings } from '../models/appSettings';
import { Authentication } from '../models/authentication';
import { Comercio } from '../models/comercio';
import { Estado } from '../models/estado';
import { EstadoFactura } from '../models/estado-factura';
import { Factura } from '../models/factura';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class ConsultarFacturaService {
  private facturaURLEndpoint = AppSettings.API_ENDPOINT + '/Factura';
  private estadoFacturaURLEndpoint = AppSettings.API_ENDPOINT + '/EstadoTransaccion';
  private authenticationURLEndpoint = AppSettings.API_GATEWAY + '/authenticate';
  private transactionURLEndpoint = AppSettings.API_GATEWAY + '/api/transaccion';
  private commerceBankAccount = AppSettings.BANK_ACCOUNT;
  private commerceBank = AppSettings.BANK_ID;
  private commerceName = AppSettings.COMMERCE_NAME;
  private commerceNIT = AppSettings.NIT;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { 
  }

  private transaction: Transaction;

  getFactura(servicioUsuarioId: number): Observable<Factura>{
    return this.http.get<Factura>(this.facturaURLEndpoint + "?Relacion_Servicios_Usuarios.id=" + servicioUsuarioId).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
     );
    
  }

  gatewayAuthentication(auth: Authentication): Observable<Authentication>{
  
    return this.http.post(this.authenticationURLEndpoint, auth, { headers: this.httpHeaders }).pipe( 
      tap(data =>  
        console.log('Auth: ' + JSON.stringify(data)))
     );
  
  }

  processPayment(factura: Factura, bearerToken: string): Observable<Transaction> {   
      let comercio: Comercio = {
        nit: this.commerceNIT,
        nombreComercio : this.commerceName
      }
    
      let estado: Estado = {
        estado :"INICIADO"
      }

      let transactionRequest: Transaction ={
        estado:  estado,
        cliente: factura.Relacion_Servicios_Usuarios.Usuario,
        numeroCuentaDestino: this.commerceBankAccount,
        banco: this.commerceBank,
        monto: factura.Relacion_Servicios_Usuarios.Servicio.ValorCatalogo,
        descripcionPago: factura.Relacion_Servicios_Usuarios.Servicio.DescripcionServicio,
        comercio: comercio,
        validar: "",
        idTxBanco: 0,
        idFactura: factura.id
      }

      this.transaction = transactionRequest;

      this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization' : `Bearer ${bearerToken}`});

      return this.http.post<Transaction>(this.transactionURLEndpoint, this.transaction, { headers: this.httpHeaders }).pipe( 
        tap(data =>  
          console.log('Transaction: ' + JSON.stringify(data)))
       );

  }

  estadoFactura(idFactura: number):Observable<any> {
    return this.http.get<Factura>(this.estadoFacturaURLEndpoint + "?idFactura=" + idFactura).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
     );
  }

  updateFactura(factura: Factura):Observable<any> {
    return this.http.put<Factura>(this.facturaURLEndpoint + "/" + factura.id,factura,{ headers: this.httpHeaders }).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
     );
  }

}
