import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  // Propiedades
  private _historial: string[] = [];
  private apiKey: string = '0rKHNTOc7LvH0hzyRMywVumV43x5U20p';

  // Constructor
  constructor(private http: HttpClient) {

  }

  // Getters y Setters
  get historial() {
    return [...this._historial]
  }


  // Métodos
  buscarGifs(texto: string) {
    texto = texto.trim().toLowerCase();
    if (!texto) return;
    // Si no está en el historial lo incluimos
    if (!this._historial.includes(texto)) {
      if (this._historial.length == 10) this._historial.pop();
      this._historial.unshift(texto);
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=0rKHNTOc7LvH0hzyRMywVumV43x5U20p&q=coche&limit=10&offset=0&rating=g&lang=es')
      .subscribe((respuesta: any) => {
        console.log(respuesta.data)
      });




  }




}
