import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie, Categoria } from '../movie.model';

@Component({
  selector: 'app-movies-delete',
  templateUrl: './movies-delete.component.html',
  styleUrls: ['./movies-delete.component.css']
})
export class MoviesDeleteComponent implements OnInit {

  movie:Movie = {
    name:"",
    type:"",
    imdb:0,
    year:0
    }

    categorias: Categoria[] = [
      {value: 'action', viewValue: 'Ação'},
      {value: 'Drama', viewValue: 'Drama'},
      {value: 'horror', viewValue: 'Terror'},
      {value: 'aventura', viewValue: 'Aventura'},
      {value: 'Luta', viewValue: 'Luta'},
    ];

  constructor(private moviesService:MoviesService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id:string|null= this.route.snapshot.paramMap.get("id")
    this.moviesService.getMoviesId(id!).subscribe((movie:Movie) => {
      this.movie = movie;
    });
    
  }

  deleteMovie(): void {
  this.moviesService.delete(this.movie.id!).subscribe((movie)=> {this.movie = movie
    this.router.navigate(["/movies"])
  })

 
}

} 
