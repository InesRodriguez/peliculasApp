import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey: string = 'ec3d80b682cf0d5ad1b539f6540d28aa';
  private urlMovieDb: string = 'https://api.themoviedb.org/3';
  private paramasGral: string = '&language=es&sort_by=popularity.desc&callback=JSONP_CALLBACK';
  peliculas: any[] = [];
  constructor(private http: HttpClient) {

  }
  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(desde.getDate() + 7);
    let desdeStr = `${desde.getFullYear()}-${(hasta.getMonth() + 101).toString().substring(1, 3)}-${desde.getDate()}`;
    let hastaStr = `${hasta.getFullYear()}-${(hasta.getMonth() + 101).toString().substring(1, 3)}-${hasta.getDate()}`;
    // let desdeStr = '2020-05-01';
    // let hastaStr = '2020-05-22';

    return this.http.jsonp(`${this.urlMovieDb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&callback=JSONP_CALLBACK`, 'callbck')
      .pipe(
        map(resp => {
          return resp
          console.log(resp)
        })
      )
  }
  getPopulares() {
    return this.http.jsonp(`${this.urlMovieDb}/discover/movie?api_key=${this.apiKey}&include_adult=true${this.paramasGral}`, 'callbck')
      .pipe(
        map(resp => {
          return resp
          console.log(resp)
        })

      );
  }
  getPopularesNinos() {
    return this.http.jsonp(`${this.urlMovieDb}/discover/movie?certification_country=es&certification.lte=G&api_key=${this.apiKey}${this.paramasGral}`, 'callbck')
      .pipe(
        map(resp => {
          return resp
          console.log(resp)
        })

      );
  }
  buscarPelicula(query: string) {
    return this.http.jsonp(`${this.urlMovieDb}/search/movie?api_key=${this.apiKey}&query=${query}`, 'callback')
      .pipe(
        map(resp => {
          return resp;
        })
      );
  }
  getPelicula(id: string) {
    return this.http.jsonp(`${this.urlMovieDb}/movie/${id}?&api_key=${this.apiKey}${this.paramasGral}`, 'callbck')
      .pipe(
        map(resp => {
          return resp
          console.log(resp)
        })

      );
  }
}
