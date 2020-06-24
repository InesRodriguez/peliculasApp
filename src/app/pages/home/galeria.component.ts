import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [ '.card img{max-height:200px}'
  ]
})
export class GaleriaComponent implements OnInit {
  @Input('peliculas') peliculas;
  @Input('titulo') titulo;
  @Input('color') color;

  constructor() { }

  ngOnInit(): void {
  }

}
