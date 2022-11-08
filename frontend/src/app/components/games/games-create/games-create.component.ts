import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



  interface Categoria {
    value: string;
    viewValue: string;
  }



@Component({
  selector: 'app-games-create',
  templateUrl: './games-create.component.html',
  styleUrls: ['./games-create.component.css']
})
export class GamesCreateComponent implements OnInit {

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

  constructor(private gamesService:GamesService, private router:Router, private formbuilder:FormBuilder) { }
  
  gameForm!: FormGroup

  ngOnInit(): void {
   
    this.gameForm = this.formbuilder.group({
      name:["", Validators.compose([Validators.required , Validators.minLength(4), Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      type:["", Validators.compose([Validators.required, Validators.minLength(3)])],
      year: [0 ,Validators.compose([Validators.required, Validators.minLength(4),Validators.maxLength(4)])]  

    })



  }
  
  cadastrarGame(){
    console.log(this.gameForm.get('name')?.errors)
    if(this.gameForm.valid){ 
      this.gamesService.postarApi(this.game).subscribe( game => {this.game = game
      this.gamesService.showMessage("Jogo Cadastrado")
      this.router.navigate(["/games"])
      })}

  
   
    
  }

 
}

