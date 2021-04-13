import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { DeskTopComponent } from './desk-top/desk-top.component';
import { TaskPanelComponent } from './task-panel/task-panel.component';
import { WorkspaceComponent } from './workcpace/workspace.component';
import { TestWindowContentComponent } from './test-window-content/test-window-content.component';
import { WindowContentDirective } from './window/window-content.directive';
import {FormsModule} from '@angular/forms';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainMenuItemComponent } from './main-menu/main-menu-item/main-menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    DeskTopComponent,
    TaskPanelComponent,
    WorkspaceComponent,
    TestWindowContentComponent,
    WindowContentDirective,
    MainMenuComponent,
    MainMenuItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
