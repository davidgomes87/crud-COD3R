import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  link = "http://localhost:3001/movies"



  constructor(private HttpClient:HttpClient) { }

  buscarApi ():Observable<Movie[]>{
   return this.HttpClient.get<Movie[]>(this.link)
  }

  postarApi (movie:Movie):Observable<Movie>{
    return this.HttpClient.post<Movie>(this.link, movie)
  }
 
  getMoviesId(id:string):Observable<Movie>{
    const linkId = `${this.link}/${id}` 
    return this.HttpClient.get<Movie>(linkId)
  }

  updateMovie(movie:Movie):Observable<Movie>{
    const linkId = `${this.link}/${movie.id}` 
    return this.HttpClient.put<Movie>(linkId, movie)
  }

  delete(id:number):Observable<Movie>{
  const linkId = `${this.link}/${id}` 
  return this.HttpClient.delete<Movie>(linkId) 
  }
}
