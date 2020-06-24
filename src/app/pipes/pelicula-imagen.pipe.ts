import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any, poster: boolean = false): any {
    let imagePath: string = 'https://image.tmdb.org/t/p/w300';
    if (poster) {
      return imagePath + pelicula.poster_path;
    }
    if (pelicula.backdrop_path) {
      return imagePath + pelicula.backdrop_path;

    } else if (pelicula.poster_path) {

      return imagePath + pelicula.poster_path;
    } else {
      return "../assets/noImage.jpg"
    }

  }

}
