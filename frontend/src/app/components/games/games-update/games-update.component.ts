import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game.model';
import { ActivatedRoute, Router } from '@angular/router';

interface Categoria {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-games-update',
  templateUrl: './games-update.component.html',
  styleUrls: ['./games-update.component.css']
})
export class GamesUpdateComponent implements OnInit {

  
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

  update() :void {
    this.gamesService.editGame(this.game).subscribe(() => {
    this.gamesService.showMessage("Jogo Atualizado")
    this.router.navigate(['/games'])
    
   })
  
  }


  cancel():void{
    this.router.navigate(['/games'])
  }


}
