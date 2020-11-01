import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  usuarios: Usuario[];

  usuario: Usuario = {};

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void{
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  getUsuario(id: number): void{
    this.usuarioService.getUsuario(id).subscribe(
      usuario => this.usuario = usuario
    );
  }

  updateUsuario(id: number,usuario: Usuario): void{
    this.usuarioService.updateUsuario(id,usuario).subscribe(
      update => this.getUsuarios()
    );
  }

  deleteUsuario(id: number): void{
    this.usuarioService.deleteUsuario(id).subscribe(
      update => this.getUsuarios()
    );
    
  }

  newUsuario():void{
    this.usuario = {};
  }

  createUsuario(usuario: Usuario): void{
    this.usuarioService.createUsuario(usuario).subscribe(
      update => this.getUsuarios()
    );
  }

}
