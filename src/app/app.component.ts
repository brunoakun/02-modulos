import { GifsService } from './gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Propiedades
  title = '02-modulos';

  // Constructor
  constructor( ) { }

  // Métodos
  ngOnInit(): void {
  }
}
