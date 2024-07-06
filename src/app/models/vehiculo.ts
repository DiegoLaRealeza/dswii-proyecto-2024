import { Cliente } from "./cliente";

export interface Vehiculo {
    idVehiculo: number,
    placa: string,
    marca: string,
    modelo: string,
    anio: number,
    color: string,
    cliente: Cliente
}
