import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { DeskTopComponent } from './desk-top/desk-top.component';
import { TaskPanelComponent } from './task-panel/task-panel.component';
import { WorkspaceComponent } from './workcpace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    DeskTopComponent,
    TaskPanelComponent,
    WorkspaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
