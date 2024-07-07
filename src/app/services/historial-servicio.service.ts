import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { HttpClient } from '@angular/common/http';
import { ResponseList } from '../models/response-list';
import { Historialservicio } from '../models/historialservicio';

@Injectable({
  providedIn: 'root'
})
export class HistorialServicioService {
  private urlBase: string = AppSettings.API_ENDPOINT + 'historial';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<ResponseList>(this.urlBase + '/listar');
  }

  buscar(id: number) {
    return this.http.get<ResponseList>(this.urlBase + '/consulta/' + id);
  }

  registrar(bean: Historialservicio) {
    return this.http.post<Historialservicio>(this.urlBase + '/grabar', bean);
  }

  actualizar(bean: Historialservicio) {
    return this.http.put<Historialservicio>(this.urlBase + '/actualizar', bean);
  }

  eliminar(id: number) {
    return this.http.delete<Historialservicio>(this.urlBase + '/eliminar/' + id);
  }
}
