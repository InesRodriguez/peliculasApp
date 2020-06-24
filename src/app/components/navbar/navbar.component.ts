import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private route: Router, private peliculasService: PeliculasService) { }

  ngOnInit(): void {
  }
  buscarPelicula(texto: string) {
    if (texto.length == 0) {
      return;
    }
    this.route.navigate(['search', texto])
    console.log(texto);
  }
}
