import { Component, OnInit } from '@angular/core';
import { Categoria, Movie } from '../movie.model';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';







@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})


export class MoviesCreateComponent implements OnInit {

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

  constructor(private movieService:MoviesService, private router:Router, private formbuilder:FormBuilder) { }
  movieForm!: FormGroup
  ngOnInit(): void { 
    this.movieForm = this.formbuilder.group({
      name:["", Validators.compose([Validators.required , Validators.minLength(4), Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      type:["", Validators.compose([Validators.required, Validators.minLength(3)])],
      imdb: [0 ,Validators.compose([Validators.required, Validators.minLength(2),Validators.maxLength(2)])],
      year: [0 ,Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(4)])]   

    })
  }


  cadastrarFilme(){
    this.movieService.postarApi(this.movie).subscribe(movie => {
      this.router.navigate(["/movies"])
    })
  }
}
