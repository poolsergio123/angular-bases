import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters :Character[]=[{
    id:uuid(),
    name:'Krilin',
    power:200
  },
  {
    id:uuid(),
    name:'Goku',
    power:100000
  },
  {
    id:uuid(),
    name:'Veguetta',
    power:50000
  }];

  addCharacter(character:Character):void{
    /* "push" es al final
       "unshift" es al inicio
       los (...) significa spread osea esparcir las demas propiedades faltantes

       Se creo una constante en la cual agrego el id de tipo "uuid"
       y luego esparcio cada dato que contenia el objeto character
       */
       const newCharacter : Character={id:uuid(),...character};

  this.characters.push(newCharacter);
  }

  onDeleteCharacterById(index :string):void{

    this.characters = this.characters.filter(character => character.id!== index);


    // this.characters.splice(index,1);
  }
  constructor() { }

}
