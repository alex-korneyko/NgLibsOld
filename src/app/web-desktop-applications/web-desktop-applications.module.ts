import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MicroApplication} from '../desk-top/micro-application';
import {WindowComponent} from '../window/window.component';
import {DeskTopComponent} from '../desk-top/desk-top.component';
import {TaskPanelComponent} from '../task-panel/task-panel.component';
import {WorkspaceComponent} from '../workcpace/workspace.component';
import {WindowContentDirective} from '../window/window-content.directive';
import {MainMenuComponent} from '../main-menu/main-menu.component';
import {MainMenuItemComponent} from '../main-menu/main-menu-item/main-menu-item.component';
import {DeskTopService} from '../desk-top/desk-top.service';
import {MicroApplications} from './micro.applications';


@NgModule({
  declarations: [
    WindowComponent,
    DeskTopComponent,
    TaskPanelComponent,
    WorkspaceComponent,
    WindowContentDirective,
    MainMenuComponent,
    MainMenuItemComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DeskTopService
  ],
  exports: [
    DeskTopComponent
  ]
})
export class WebDesktopApplicationsModule {

  public static forRoot(applications: MicroApplication[]): ModuleWithProviders<WebDesktopApplicationsModule> {
    MicroApplications.applications.push(...applications);

    return {ngModule: WebDesktopApplicationsModule}
  }
}

