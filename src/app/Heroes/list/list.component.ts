import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heronames:string[]=[
    'Hulk','Capitan Ameria','Thor','Wonder Woman'
  ];
  public retornoremove?:string;

  remove():void{
    this.retornoremove= this.heronames.pop();
  }
}
