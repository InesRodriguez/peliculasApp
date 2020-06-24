import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cartelera: any;
  populares:any;
  popularesNino:any;
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getPopulares().subscribe((resp: any) => {this.populares = resp.results; console.log(resp.results)})
    this.peliculasService.getCartelera().subscribe((resp: any) => this.cartelera = resp.results)
    this.peliculasService.getPopularesNinos().subscribe((resp: any) => this.popularesNino = resp.results)
  }
}
