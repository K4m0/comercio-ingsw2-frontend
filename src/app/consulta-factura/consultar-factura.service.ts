import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppSettings } from '../models/appSettings';
import { Factura } from '../models/factura';

@Injectable({
  providedIn: 'root'
})
export class ConsultarFacturaService {
  private facturaURLEndpoint = AppSettings.API_ENDPOINT + '/Factura';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }


  getFactura(servicioUsuarioId: number): Observable<Factura>{
    return this.http.get<Factura>(this.facturaURLEndpoint + "?Relacion_Servicios_Usuarios.id=" + servicioUsuarioId).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }
}
