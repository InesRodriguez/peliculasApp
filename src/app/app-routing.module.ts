import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:texto', component: SearchComponent },
  { path: 'pelicula/:id/:pag', component: PeliculaComponent },
  { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
