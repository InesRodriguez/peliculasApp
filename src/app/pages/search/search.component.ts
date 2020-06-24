import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  buscar: string = "";
  peliculas: any[] = [];
  constructor(public peliculaService: PeliculasService, public router: ActivatedRoute) {
    this.router.params.subscribe(parametros => {
      console.log(parametros)
      if(parametros['texto']){
        this.buscar = parametros['texto'];
        this.buscarPelicula()
      }
    })
  }

  ngOnInit(): void {
  }
  buscarPelicula() {
    console.log("entrar");
    if (this.buscar.length == 0) {
      return;
    }
    this.peliculaService.buscarPelicula(this.buscar).subscribe(resp => {
      this.peliculas = resp.results; console.log(this.peliculas)
      
    })
  }
}
