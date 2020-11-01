import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppSettings } from '../models/appSettings';
import { Servicio } from '../models/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private servicioURLEndpoint = AppSettings.API_ENDPOINT + '/Servicios';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getServicios(): Observable<Servicio[]>{
    return this.http.get<Servicio[]>(this.servicioURLEndpoint).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }

  getServicio(id: number): Observable<Servicio>{
    return this.http.get<Servicio>(this.servicioURLEndpoint + '/'+ id).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }

  updateServicio(id: number, servicio: Servicio): Observable<Servicio>{
    return this.http.put<Servicio>(this.servicioURLEndpoint + '/'+ id,servicio, {headers: this.httpHeaders}).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }

  deleteServicio(id: number): Observable<Servicio>{
    return this.http.delete<Servicio>(this.servicioURLEndpoint + '/'+ id).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }

  createServicio( servicio: Servicio): Observable<Servicio>{
    return this.http.post<Servicio>(this.servicioURLEndpoint,servicio, {headers: this.httpHeaders}).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }
}
