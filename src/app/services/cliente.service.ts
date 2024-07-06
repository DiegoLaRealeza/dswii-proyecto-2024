import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../app.settings';
import { ResponseList } from '../models/response-list';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiBase : string = AppSettings.API_ENDPOINT+ "cliente";
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<ResponseList>(this.apiBase + "/listar");

  }
  update(bean: Cliente){
    return this.http.put<Cliente>(this.apiBase + "/actualizar", bean);
  }

  delete(id: number){
    return this.http.delete(this.apiBase + "/eliminar/" + id);
  }

  search(id:number){
    return this.http.get<ResponseList>(this.apiBase + "/consulta/" + id);
      
  }
  save(bean: Cliente) {
    return this.http.post<Cliente>(this.apiBase + "/grabar", bean);
  }


}