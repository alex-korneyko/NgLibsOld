import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TestWindowContentComponent} from './test-window-content/test-window-content.component';
import {FormsModule} from '@angular/forms';
import {WebDesktopApplicationsModule} from '../../projects/windows-micro-applications/src/lib/desktop/web-desktop-applications.module';
import {MicroApplicationType} from '../../projects/windows-micro-applications/src/lib/desktop/micro-application-type.enum';
import {TestServiceApplicationComponent} from './test-service-application/test-service-application.component';

@NgModule({
  declarations: [
    AppComponent,
    TestWindowContentComponent,
    TestServiceApplicationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    WebDesktopApplicationsModule.microApplications([
      {title: "Test Content Window", microAppForm: TestWindowContentComponent, type: MicroApplicationType.Application},
      {title: "Test service", microAppForm: TestServiceApplicationComponent, type: MicroApplicationType.Service}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
