import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioUsuario } from '../models/servicio-usuario';
import {  tap } from 'rxjs/operators'; 
import { ActivatedRoute } from '@angular/router';
import { Factura } from '../models/factura';
import { AppSettings } from '../models/appSettings';

@Injectable({
  providedIn: 'root'
})
export class ConsultarServicioService {
  private servicioUsuarioURLEndpoint = AppSettings.API_ENDPOINT + '/Relacion_Servicios_Usuarios';
  
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor( private http: HttpClient) {
    
   }

  getServicios(email:string): Observable<ServicioUsuario[]>{
    return this.http.get<ServicioUsuario[]>(this.servicioUsuarioURLEndpoint + "?Usuario.email=" + email).pipe( 
      tap(data =>  
      console.log('All: ' + JSON.stringify(data))) 
    );
  }
  
}
