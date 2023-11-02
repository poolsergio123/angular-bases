import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { NameComponent } from './Counter/counter.component';
//import { HeroComponent } from './Heroes/hero/hero.component';
//import { ListComponent } from './Heroes/list/list.component';
import { CounterModule } from './Counter/counter.module';
import { HeroesModule } from './Heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,

    //se tuvo que importar la clase countercomponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
