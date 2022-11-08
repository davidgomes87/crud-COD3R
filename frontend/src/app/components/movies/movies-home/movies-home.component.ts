import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';








@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {

  movies:Movie[] = [] 

  constructor(private MoviesService:MoviesService) { }

  ngOnInit(): void {
    this.MoviesService.buscarApi().subscribe(movies => this.movies = movies)
    
  }




}
