import { NgModule } from "@angular/core";
import { NameComponent } from './components/counter/counter.component';



/*este modulo fue creado para declarar todas
las clases dentro de la carpeta "Counter" */
@NgModule({
  declarations:[
    NameComponent
  ],
  exports:[
    NameComponent
  ]

})
export class CounterModule
{

}
