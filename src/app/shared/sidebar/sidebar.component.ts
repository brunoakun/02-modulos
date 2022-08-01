import { GifsService } from './../../gifs/services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public srvGif: GifsService) { }

  ngOnInit(): void {
  }

  busca(index: number) {
    const query = this.srvGif.historial[index];
    this.srvGif.buscaImg(query);
  }

}
