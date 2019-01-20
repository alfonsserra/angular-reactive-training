import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { ComponentsModule } from '../common/components/components.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Lesson5Component } from './lesson5/lesson5.component';
import { FormsModule } from '@angular/forms';
import { SystelabComponentsModule } from 'systelab-components';
import { GridHeaderContextMenuComponent } from 'systelab-components/widgets/grid/contextmenu/grid-header-context-menu.component';
import { GridContextMenuCellRendererComponent } from 'systelab-components/widgets/grid/contextmenu/grid-context-menu-cell-renderer.component';
import { DialogService, MessagePopupService } from 'systelab-components/widgets/modal';
import { SystelabTranslateModule } from 'systelab-translate';
import { SystelabPreferencesModule } from 'systelab-preferences';
import { SystelabLoginModule } from 'systelab-login';
import { AgGridModule } from 'ag-grid-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Lesson6Component } from './lesson6/lesson6.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SystelabTranslateModule.forRoot(),
    SystelabPreferencesModule.forRoot(),
    SystelabLoginModule.forRoot(),
    SystelabComponentsModule.forRoot(),
    DragDropModule,
    AgGridModule.withComponents([
      GridContextMenuCellRendererComponent,
      GridHeaderContextMenuComponent
    ]),
    ComponentsModule
  ],
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component
  ],
  providers: [MessagePopupService,
    DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
