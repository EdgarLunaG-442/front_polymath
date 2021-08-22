import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Restaurante } from './restaurante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private urlBack = environment.backUrl+'api/restaurantes'
  constructor(private http: HttpClient) { }

  obtenerRestaurantes():Observable<Restaurante[]>
  {
    return this.http.get<Restaurante[]>(this.urlBack)
  }

  obtenerRestaurante(id:string, hoy?:boolean):Observable<Restaurante>
  {
    if (!hoy)
    {
      return this.http.get<Restaurante>(`${this.urlBack}/${id}`)
    }
    else
    {
      return this.http.get<Restaurante>(`${this.urlBack}/${id}?hoy=true`)
    }
    
  }

  agregarRestaurante(restauranteJson:any)
  {
    return this.http.post<Restaurante>(this.urlBack,restauranteJson)
  }

  eliminarRestaurante(id:string)
  {
    return this.http.delete(`${this.urlBack}/${id}`)
  }

  agregarReserva(id:string,fecha:any)
  {
    return this.http.post(`${this.urlBack}/${id}`,fecha)
  }

}
