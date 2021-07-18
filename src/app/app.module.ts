import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountersModule } from './components/counters/counters.module';
import { HerosModule } from './components/heros/heros.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HerosModule,
    CountersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
