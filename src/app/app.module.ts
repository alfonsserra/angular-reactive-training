import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';

@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
