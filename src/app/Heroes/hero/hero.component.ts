import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']

})
export class HeroComponent {
  public name : string ='IronMan';
  public name2 : string ='Tony Stark';
  public age : number =45;

  //se comporta como propiedad
  get capital():string
  {
    // return 'hola'.toUpperCase();
    return this.name.toUpperCase();
  }
  //es metodo
  gethero():string{
    return `${this.name2} es ${this.name}`;
  }

  changeHero():void{
    this.name = 'Spiderman';
  }

  changAge():void{
    this.age =25;
  }
  reset():void{
    this.name='IronMan';
    this.name2='Tony Stark';
    this.age=45;
  }
}
