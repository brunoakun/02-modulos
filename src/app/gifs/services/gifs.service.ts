import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  // Propiedades
  private _historial: string[] = [];

  private servicioUrl = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = '0rKHNTOc7LvH0hzyRMywVumV43x5U20p';

  public buscando: string = '';
  public resultados: any[] = [];

  // Constructor
  constructor(private http: HttpClient) {
    // Si existe histrorial en localstorage, recuperarlo
    const localStr = localStorage.getItem('historial');
    if (localStr) {
      this._historial = JSON.parse(localStr!);  // parse() de string a array
      this.buscaImg(this.historial[0]);
    }
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
      localStorage.setItem('historial', JSON.stringify(this.historial))
    }

    this.buscaImg(query);

  }

  buscaImg(query: string) {
    this.buscando = query;
    const parametros = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '10')
      .set('lang', 'es')
      .set('rating', 'g')
      .set('offset', '0');

    this.http.get<any>(`${this.servicioUrl}/search`, { params: parametros })
      .subscribe(respuesta => {
        console.log(respuesta.data);
        this.resultados = respuesta.data;
      });


  }



}
