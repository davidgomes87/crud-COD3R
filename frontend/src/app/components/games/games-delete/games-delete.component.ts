import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game.model';
import { Router, ActivatedRoute } from '@angular/router';

interface Categoria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-games-delete',
  templateUrl: './games-delete.component.html',
  styleUrls: ['./games-delete.component.css']
})
export class GamesDeleteComponent implements OnInit {
  game:Game = {
   
    name:"",
    type:"",
    year: 0
    }

    categorias: Categoria[] = [
      {value: 'action', viewValue: 'Ação'},
      {value: 'RPG', viewValue: 'RPG'},
      {value: 'horror', viewValue: 'Terror'},
      {value: 'aventura', viewValue: 'Aventura'},
      {value: 'Luta', viewValue: 'Luta'},
    ];
  

  constructor(private gamesService:GamesService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    const id:string|null= this.route.snapshot.paramMap.get("id")
    this.gamesService.getGametoEdit(id!).subscribe((game:Game) => {
      this.game = game;
    });
  }
  deleteGame(): void {
      this.gamesService.delete(this.game.id!).subscribe(() => {
      this.gamesService.showMessage("Jogo excluido com sucesso!");
      this.router.navigate(["/games"]);
    });
  }
 
}
