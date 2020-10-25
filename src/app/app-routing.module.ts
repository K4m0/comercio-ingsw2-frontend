import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarServicioComponent } from './consultar-servicio/consultar-servicio.component';
import { GestionServicioUsuarioComponent } from './gestion-servicio-usuario/gestion-servicio-usuario.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';

const routes: Routes = [
  {path: '', redirectTo: '/consultar-servicio',pathMatch:'full'},
  { path: 'consultar-servicio', component: ConsultarServicioComponent },
  {path: '', redirectTo: '/servicios-usuarios',pathMatch:'full'},
  { path: 'servicios-usuarios', component: GestionServicioUsuarioComponent },
  {path: '', redirectTo: '/servicios',pathMatch:'full'},
  {path: 'servicios', component: GestionServiciosComponent},
  {path: '', redirectTo: '/usuarios',pathMatch:'full'},
  { path: 'usuarios', component: GestionUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
