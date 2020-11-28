import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from '../models/factura';
import { ServicioUsuario } from '../models/servicio-usuario';
import { ConsultarServicioService } from './consultar-servicio.service';

@Component({
  selector: 'app-consultar-servicio',
  templateUrl: './consultar-servicio.component.html',
  styleUrls: ['./consultar-servicio.component.css']
})
export class ConsultarServicioComponent implements OnInit {

  servicios: ServicioUsuario[] = [];

  servicio: ServicioUsuario = {};

  private userEmail: string;
 
  constructor(private Activatedroute: ActivatedRoute, private servicioService: ConsultarServicioService,private router: Router) {
    this.userEmail = this.Activatedroute.snapshot.queryParamMap.get('email');
   }

  ngOnInit(): void {
    this.getServicios();
  }

  getServicios(): void{
    this.servicioService.getServicios(this.userEmail).subscribe(
      servicios => this.servicios = servicios
    );
  }

  getFactura(servicioUsuarioId : number): void{
    this.router.navigate(['/consultar-factura'], {queryParams: {servicioUsuarioId: servicioUsuarioId}});
  }
}
