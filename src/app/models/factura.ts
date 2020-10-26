import { EstadoFactura } from './estado-factura';
import { MesFactura } from './mes-factura';
import { ServicioUsuario } from './servicio-usuario';

export interface Factura{
    id?: number;
    Relacion_Servicios_Usuarios?: ServicioUsuario;
    Mes_Factura?: MesFactura;
    Estado_Factura?: EstadoFactura;
    DescripcionFactura?: string;
    FechaCambioEstado?: string;
}