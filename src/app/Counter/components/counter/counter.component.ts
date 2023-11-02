import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola</h1>
  <p>Counter : {{counter}}</p>


<button (click)="incremento(1)">+1</button>
<button (click)="reset()">reset</button>
<button (click)="decremento(1)">-1</button>`
})

export class NameComponent  {
  public counter:number=10;

  incremento(value:number):void
  {
    this.counter +=value;
  }

  decremento(value:number):void
  {
    this.counter-=value;
  }

  reset():void{
    this.counter=10;
  }

  constructor() { }
}


