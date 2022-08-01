import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  // Propiedades
  private _historial: string[] = [];
  private apiKey: string = '0rKHNTOc7LvH0hzyRMywVumV43x5U20p';

  public buscando: string = '';
  public resultados: any[] = [];

  // Constructor
  constructor(private http: HttpClient) {

  }

  // Getters y Setters
  get historial() {
    return [...this._historial]
  }


  // Métodos
  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    if (!query) return;
    // Si no está en el historial lo incluimos
    if (!this._historial.includes(query)) {
      if (this._historial.length == 10) this._historial.pop();
      this._historial.unshift(query);
    }

    this.buscaImg(query);

  }

  buscaImg(query: string) {
    this.buscando = query;

    this.http.get<any>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10&offset=0&rating=g&lang=es`)
      .subscribe(respuesta => {
        console.log(respuesta.data);
        this.resultados = respuesta.data;
      });


  }



}
