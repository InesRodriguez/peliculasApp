import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peliculasApp';
  peliculas:any[];
  constructor(private peliculasService: PeliculasService) {
    // this.peliculasService.getPopulares().subscribe(data => console.log(data));
    // this.peliculasService.buscarPelicula('osos').subscribe(data => console.log(data));
    // console.log(this.peliculas);
  }
  
}
