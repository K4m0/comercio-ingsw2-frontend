import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppSettings } from '../models/appSettings';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioURLEndpoint = AppSettings.API_ENDPOINT + '/Usuarios';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.usuarioURLEndpoint).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }

  getUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(this.usuarioURLEndpoint + '/'+ id).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }

  updateUsuario(id: number, usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(this.usuarioURLEndpoint + '/'+ id,usuario, {headers: this.httpHeaders}).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }

  deleteUsuario(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(this.usuarioURLEndpoint + '/'+ id).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }

  createUsuario( usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.usuarioURLEndpoint,usuario, {headers: this.httpHeaders}).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }

}
