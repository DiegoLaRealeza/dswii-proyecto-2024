import { Servicio } from "./servicio";

export interface Historialservicio {
    idHistorialServicio: number,
    servicio: Servicio,
    fecha: string,
    descripcion: string
}
