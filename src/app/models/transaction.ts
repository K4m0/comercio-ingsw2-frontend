import { Comercio } from './comercio';
import { Usuario } from './usuario';

export interface Transaction{
    cus?: number;
    estado? : string;
    cliente?: Usuario;
    numeroCuentaDestino?: string;
    numeroCuentaorigen?: string;
    urlRetorno?: string;
    banco?: number;
    monto?: number;
    descripcionPago?: string;
    comercio?: Comercio;
    validar?: string;
}