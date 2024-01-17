import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  constructor( private dbzservice :DbzService){}

  get characters():Character[]{
    // en la misma clase si tengo accesoa las propiedades y metodos del servicio privado
    return[...this.dbzservice.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzservice.onDeleteCharacterById(id);
  }

  onNewCharacter(Character :Character):void{
    this.dbzservice.addCharacter(Character);
  }
}
