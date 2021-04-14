import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TestWindowContentComponent} from './test-window-content/test-window-content.component';
import {FormsModule} from '@angular/forms';
import {WebDesktopApplicationsModule} from './web-desktop-applications/web-desktop-applications.module';

@NgModule({
  declarations: [
    AppComponent,

    TestWindowContentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    WebDesktopApplicationsModule.forRoot([
      {title: "Test Content Window", microAppForm: TestWindowContentComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
