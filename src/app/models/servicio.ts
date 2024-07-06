import { Vehiculo } from "./vehiculo";

export interface Servicio {
    idServicio: number,
    vehiculo: Vehiculo,
    descripcion: string,
    fecha: string,
    costo: number,
    estado: number
}
