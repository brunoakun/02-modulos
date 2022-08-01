import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  // Propiedades
  private _historial: string[] = [];

  // Constructor
  constructor() {

  }

  // Getters y Setters
  get historial() {
    return [...this._historial]
  }


  // Métodos
  buscarGifs(texto: string) {
    texto = texto.trim();
    if (!texto) return;
    // Si no está en el historial lo incluimos
    if (!this._historial.includes(texto)) {
      if (this._historial.length == 10) this._historial.pop();
      this._historial.unshift(texto);
    }
  }




}
