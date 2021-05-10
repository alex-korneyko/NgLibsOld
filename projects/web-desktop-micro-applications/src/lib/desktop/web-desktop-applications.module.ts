import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IMicroApplication} from './micrioApplications/micro-application';
import {MicroApplicationFormComponent} from './micro-application-form/micro-application-form.component';
import {DesktopComponent} from './desktop.component';
import {TaskPanelComponent} from './task-panel/task-panel.component';
import {WorkspaceComponent} from './workcpace/workspace.component';
import {MicroApplicationFormContentDirective} from './micro-application-form/micro-application-form-content.directive';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {MainMenuItemComponent} from './main-menu/main-menu-item/main-menu-item.component';
import {WebDesktopCoreService} from './web-desktop-core.service';
import {WebDesktopComon} from './web-desktop-comon';
import {TaskPanelApplicationItemComponent} from './task-panel/task-panel-application-item/task-panel-application-item.component';


@NgModule({
  declarations: [
    MicroApplicationFormComponent,
    DesktopComponent,
    TaskPanelComponent,
    WorkspaceComponent,
    MicroApplicationFormContentDirective,
    MainMenuComponent,
    MainMenuItemComponent,
    TaskPanelApplicationItemComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    WebDesktopCoreService
  ],
  exports: [
    DesktopComponent
  ]
})
export class WebDesktopApplicationsModule {

  public static microApplications(applications: IMicroApplication[]): ModuleWithProviders<WebDesktopApplicationsModule> {
    WebDesktopComon.PushMicroApplications(applications);

    return {ngModule: WebDesktopApplicationsModule}
  }
}

