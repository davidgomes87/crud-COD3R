import { Component, OnInit } from '@angular/core';
import { Movie, Categoria } from '../movie.model';
import { MoviesService } from '../movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-movies-update',
  templateUrl: './movies-update.component.html',
  styleUrls: ['./movies-update.component.css']
})
export class MoviesUpdateComponent implements OnInit {


  movie:Movie= {
   
    name: "",
    type: "",
    year: 1999,
    imdb: 99
    }
  
  categorias: Categoria[] = [
    {value: 'action', viewValue: 'Ação'},
    {value: 'Drama', viewValue: 'Drama'},
    {value: 'horror', viewValue: 'Terror'},
    {value: 'aventura', viewValue: 'Aventura'},
    {value: 'Luta', viewValue: 'Luta'},
  ];

  constructor(private moviesService:MoviesService, private router:Router, private route:ActivatedRoute, private formbuilder:FormBuilder) { }
  movieForm!: FormGroup
  ngOnInit(): void {
   const id:string | null= this.route.snapshot.paramMap.get("id")
   this.moviesService.getMoviesId(id!).subscribe( (movie:Movie) => this.movie = movie)

   this.movieForm = this.formbuilder.group({
    name:["", Validators.compose([Validators.required , Validators.minLength(4), Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
    type:["", Validators.compose([Validators.required, Validators.minLength(3)])],
    imdb: [0 ,Validators.compose([Validators.required, Validators.minLength(2),Validators.maxLength(2)])],
    year: [0 ,Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(4)])]   

  })



  }
  update ():void {
    this.moviesService.updateMovie(this.movie).subscribe(()=>{
      this.router.navigate(['/movies'])
    })
  }

  cancel ():void {
    
      this.router.navigate(['/movies'])
    
  }
} 
