import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Servicio } from '../models/servicio';
import { ResponseList } from '../models/response-list';
import { Cliente } from '../models/cliente';
import { AppSettings } from '../app.settings';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private apiBase : string = AppSettings.API_ENDPOINT+"servicio";
  private apiBaseV : string = AppSettings.API_ENDPOINT+"vehiculo";
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<ResponseList>(this.apiBase + "/listar");
  } 
  getVehi(){
    return this.http.get<ResponseList>(this.apiBaseV + "/listar");
  } 
  update(bean: Servicio){
    return this.http.put(this.apiBase + "/actualizar", bean);
  }
  delete(id: number){
    return this.http.delete(this.apiBase + "/eliminar/" + id);
  }
  search(id:number){
    return this.http.get<ResponseList>(this.apiBase + "/consulta/" + id);
  }
  save(bean: Servicio){
    return this.http.post<Servicio>(this.apiBase + "/grabar", bean);
  }





}
