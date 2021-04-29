import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MicroApplicationType, WebDesktopApplicationsModule} from 'windows-micro-applications';
import {TestServiceApplicationComponent} from './test-service-application/test-service-application.component';
import {SimpleToDoComponent} from './simple-to-do/simple-to-do.component';
import { SimpleToDoTaskEditorComponent } from './simple-to-do/simple-to-do-task-editor/simple-to-do-task-editor.component';
import { TaskListItemComponent } from './simple-to-do/task-list-item/task-list-item.component';
import { TaskInfoWindowComponent } from './simple-to-do/task-info-window/task-info-window.component';
import {BaseComponentsModule} from '../../projects/base-components/src/lib/base-components.module';
import { ComponentExamplesComponent } from './component-examples/component-examples.component';
import { ButtonsExampleComponent } from './component-examples/buttons-example/buttons-example.component';
import { InputsExampleComponent } from './component-examples/inputs-example/inputs-example.component';
import { ButtonSizesComponent } from './component-examples/buttons-example/button-sizes/button-sizes.component';
import { ButtonColorsComponent } from './component-examples/buttons-example/button-colors/button-colors.component';
import { ButtonOutlineColorsComponent } from './component-examples/buttons-example/button-outline-colors/button-outline-colors.component';
import { TextInputsExampleComponent } from './component-examples/inputs-example/text-inputs-example/text-inputs-example.component';
import { TextInputsExampleSizesComponent } from './component-examples/inputs-example/text-inputs-example/text-inputs-example-sizes/text-inputs-example-sizes.component';
import { TextInputsExampleColorsComponent } from './component-examples/inputs-example/text-inputs-example/text-inputs-example-colors/text-inputs-example-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    TestServiceApplicationComponent,
    SimpleToDoComponent,
    SimpleToDoTaskEditorComponent,
    TaskListItemComponent,
    TaskInfoWindowComponent,
    ComponentExamplesComponent,
    ButtonsExampleComponent,
    InputsExampleComponent,
    ButtonSizesComponent,
    ButtonColorsComponent,
    ButtonOutlineColorsComponent,
    TextInputsExampleComponent,
    TextInputsExampleSizesComponent,
    TextInputsExampleColorsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BaseComponentsModule,
    WebDesktopApplicationsModule.microApplications([
      {title: "Test service", formContentComponent: TestServiceApplicationComponent, type: MicroApplicationType.Service},
      {title: "Component examples", formContentComponent: ComponentExamplesComponent, type: MicroApplicationType.Service, autostart: true},
      {title: "Simple ToDo", formContentComponent: SimpleToDoComponent, type: MicroApplicationType.Application}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
