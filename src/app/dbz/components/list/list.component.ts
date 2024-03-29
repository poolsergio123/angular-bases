import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:15
  }]

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(index:string|undefined):void{
    if (!index) return;
    this.onDelete.emit(index);
  }
}
