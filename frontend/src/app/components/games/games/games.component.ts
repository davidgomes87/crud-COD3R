import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game.model';



@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games:Game[] = []
  displayedColumns = ["id","name","type","year"]
  constructor( private gamesService:GamesService) { }

  ngOnInit(): void {

    this.gamesService.buscarApi().subscribe((games) => {this.games = games})
  }
  
    
   
}
