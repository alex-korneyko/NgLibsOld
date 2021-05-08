import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentExamplesComponent} from './component-examples.component';
import {MicroApplication, MicroApplicationFormContent, MicroApplicationType} from '@nextrium/web-desktop';
import {ButtonsExampleComponent} from './buttons-example/buttons-example.component';
import {InputsExampleComponent} from './inputs-example/inputs-example.component';
import {ButtonSizesComponent} from './buttons-example/button-sizes/button-sizes.component';
import {ButtonColorsComponent} from './buttons-example/button-colors/button-colors.component';
import {ButtonOutlineColorsComponent} from './buttons-example/button-outline-colors/button-outline-colors.component';
import {TextInputsExampleComponent} from './inputs-example/text-inputs-example/text-inputs-example.component';
import {TextInputsExampleSizesComponent} from './inputs-example/text-inputs-example/text-inputs-example-sizes/text-inputs-example-sizes.component';
import {TextInputsExampleColorsComponent} from './inputs-example/text-inputs-example/text-inputs-example-colors/text-inputs-example-colors.component';
import {TextAreaExampleComponent} from './inputs-example/text-area-example/text-area-example.component';
import {TextAreaExampleColorsComponent} from './inputs-example/text-area-example/text-area-example-colors/text-area-example-colors.component';
import {TextAreaExampleSizesComponent} from './inputs-example/text-area-example/text-area-example-sizes/text-area-example-sizes.component';
import {DropdownSelectComponent} from './select/dropdown-select/dropdown-select.component';
import {MultiSelectComponent} from './select/multi-select/multi-select.component';
import {BaseComponentsModule} from '@nextrium/base-components';

@NgModule({
  declarations: [
    ComponentExamplesComponent,
    ButtonsExampleComponent,
    InputsExampleComponent,
    ButtonSizesComponent,
    ButtonColorsComponent,
    ButtonOutlineColorsComponent,
    TextInputsExampleComponent,
    TextInputsExampleSizesComponent,
    TextInputsExampleColorsComponent,
    TextAreaExampleComponent,
    TextAreaExampleColorsComponent,
    TextAreaExampleSizesComponent,
    DropdownSelectComponent,
    MultiSelectComponent,
  ],
  imports: [
    CommonModule,
    BaseComponentsModule
  ],
  exports: []
})
export class ComponentExamplesModule extends MicroApplication {

    title = "Components library";
    formContentComponent = ComponentExamplesComponent;
    type = MicroApplicationType.Accessories;
    children = new Array<Type<MicroApplicationFormContent>>();
}
