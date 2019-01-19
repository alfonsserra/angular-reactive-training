import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogDisplayComponent } from './log-display/log-display.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LogDisplayComponent],
  imports:      [CommonModule,
    BrowserModule
  ],
  exports:      [LogDisplayComponent]
})
export class ComponentsModule {
}
