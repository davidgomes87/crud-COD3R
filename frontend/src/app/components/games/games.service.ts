import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from './game.model';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class GamesService {

 

  link = "http://localhost:3001/games"

  constructor(private httpClient:HttpClient, private matSnackBar:MatSnackBar ) { }

  buscarApi():Observable<Game[]>{
     return this.httpClient.get<Game[]>(this.link)
  }

  postarApi(game:Game):Observable<Game>{
    return this.httpClient.post<Game>(this.link, game) 
  }

  showMessage (msg:string){
    this.matSnackBar.open(msg, 'x', {duration:3000, horizontalPosition:"right", verticalPosition:"top"})
  }

  getGametoEdit(id: string): Observable<Game> {
    const url = `${this.link}/${id}`;
    return this.httpClient.get<Game>(url)
    

  }

  editGame(game:Game):Observable<Game>{
    const url = `${this.link}/${game.id}`
    return this.httpClient.put<Game>(url, game)
  }

  delete(id: number): Observable<Game> {
    const url = `${this.link}/${id}`;
    return this.httpClient.delete<Game>(url)}

 
}
