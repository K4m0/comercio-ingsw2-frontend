import { Component, OnInit } from '@angular/core';
import { Servicio } from '../models/servicio';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-gestion-servicios',
  templateUrl: './gestion-servicios.component.html',
  styleUrls: ['./gestion-servicios.component.css']
})
export class GestionServiciosComponent implements OnInit {

  servicios: Servicio[];

  servicio: Servicio = {};

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.getServicios();
  }

  getServicios(): void{
    this.servicioService.getServicios().subscribe(
      servicios => this.servicios = servicios
    );
  }

  getServicio(id: number): void{
    this.servicioService.getServicio(id).subscribe(
      servicio => this.servicio = servicio
    );
  }

  updateServicio(id: number,servicio: Servicio): void{
    this.servicioService.updateServicio(id,servicio).subscribe(
      update => this.getServicios()
    );
  }

  deleteServicio(id: number): void{
    this.servicioService.deleteServicio(id).subscribe(
      update => this.getServicios()
    );
    
  }

  newServicio():void{
    this.servicio = {};
  }

  createServicio(servicio: Servicio): void{
    this.servicioService.createServicio(servicio).subscribe(
      update => this.getServicios()
    );
  }

}
