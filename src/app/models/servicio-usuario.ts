import { Servicio } from './servicio'
import { Usuario } from './usuario'

export interface ServicioUsuario{
    id? : number,
    Servicio?: Servicio;
    Usuario?: Usuario;
    dia_corte?: number,
    fechaInicioRelacion?: string,
    fechaFinRelacion?: string
}