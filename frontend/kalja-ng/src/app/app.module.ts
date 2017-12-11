import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RavintolatComponent } from './ravintolat/ravintolat.component';


@NgModule({
  declarations: [
    AppComponent,
    RavintolatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
