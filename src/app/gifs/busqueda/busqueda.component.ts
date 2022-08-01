import { GifsService } from './../services/gifs.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  // Propiedades
  public txtBuscar: string = '';

  // Constructor
  constructor(public srvGif: GifsService) {
    this.txtBuscar = '';
  }

  // Getters & Setters

  //Métodos
  ngOnInit(): void {

  }

  buscar() {
    this.srvGif.buscarGifs(this.txtBuscar);
    this.txtBuscar = '';
  }

}
