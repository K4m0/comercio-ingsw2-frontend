import { Comercio } from './comercio';
import { Estado } from './estado';
import { Usuario } from './usuario';

export interface Transaction{
    cus?: number;
    estado? : Estado;
    cliente?: Usuario;
    numeroCuentaDestino?: string;
    numeroCuentaorigen?: string;
    urlRetorno?: string;
    banco?: number;
    monto?: number;
    descripcionPago?: string;
    comercio?: Comercio;
    validar?: string;
    idTxBanco?: number;
    idFactura?: number;
}