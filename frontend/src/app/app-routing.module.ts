import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './template/home/home.component';

import { GamesComponent } from './components/games/games/games.component';
import { GamesCreateComponent } from './components/games/games-create/games-create.component';
import { GamesUpdateComponent } from './components/games/games-update/games-update.component';
import { GamesDeleteComponent } from './components/games/games-delete/games-delete.component';
import { MoviesHomeComponent } from './components/movies/movies-home/movies-home.component';
import { MoviesCreateComponent } from './components/movies/movies-create/movies-create.component';
import { MoviesUpdateComponent } from './components/movies/movies-update/movies-update.component';
import { MoviesDeleteComponent } from './components/movies/movies-delete/movies-delete.component';







const routes: Routes = [
{
path:"",
component: HomeComponent
},

{
  path: "games",
  component: GamesComponent
},
{
  path: "games-create",
  component: GamesCreateComponent
},

{
  path: "games-update/:id",
  component: GamesUpdateComponent
},
{
path: "games-delete/:id",
component: GamesDeleteComponent
},



{
  path: "movies",
  component: MoviesHomeComponent
},
{
  path: "movies-create",
  component: MoviesCreateComponent
},

{
  path: "movies-update/:id",
  component: MoviesUpdateComponent
},
{
  path: "movies-delete/:id",
  component: MoviesDeleteComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
