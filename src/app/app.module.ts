import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConsultarServicioComponent } from './consultar-servicio/consultar-servicio.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { GestionServicioUsuarioComponent } from './gestion-servicio-usuario/gestion-servicio-usuario.component';
import { GestionServiciosComponent } from './gestion-servicios/gestion-servicios.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { ConsultaFacturaComponent } from './consulta-factura/consulta-factura.component';
import { ConsultarFacturaService } from './consulta-factura/consultar-factura.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ConsultarServicioComponent,
    GestionUsuariosComponent,
    GestionServicioUsuarioComponent,
    GestionServiciosComponent,
    IndexComponent,
    ConsultaFacturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ConsultarFacturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
