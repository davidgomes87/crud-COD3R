import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component'


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './template/home/home.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { GamesComponent } from './components/games/games/games.component';
import { GamesCreateComponent } from './components/games/games-create/games-create.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GamesTableComponent } from './components/games/games-table/games-table.component';
import { GamesUpdateComponent } from './components/games/games-update/games-update.component';
import { GamesDeleteComponent } from './components/games/games-delete/games-delete.component';
import { MoviesHomeComponent } from './components/movies/movies-home/movies-home.component';
import { MoviesCreateComponent } from './components/movies/movies-create/movies-create.component';
import { MoviesUpdateComponent } from './components/movies/movies-update/movies-update.component';
import { MoviesDeleteComponent } from './components/movies/movies-delete/movies-delete.component';














@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GamesComponent,
    GamesCreateComponent,
    GamesTableComponent,
    GamesUpdateComponent,
    GamesDeleteComponent,
    MoviesHomeComponent,
    MoviesCreateComponent,
    MoviesUpdateComponent,
    MoviesDeleteComponent



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,

   
 
  

    

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
