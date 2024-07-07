import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { ResponseList } from '../models/response-list';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private urlBase: string = AppSettings.API_ENDPOINT + 'vehiculo';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<ResponseList>(this.urlBase + '/listar');
  }

  buscar(id: number) {
    return this.http.get<ResponseList>(this.urlBase + '/consulta/' + id);
  }

  registrar(bean: Vehiculo) {
    return this.http.post<Vehiculo>(this.urlBase + '/grabar', bean);
  }

  actualizar(bean: Vehiculo) {
    return this.http.put<Vehiculo>(this.urlBase + '/actualizar', bean);
  }

  eliminar(id: number) {
    return this.http.delete<Vehiculo>(this.urlBase + '/eliminar/' + id);
  }

}
