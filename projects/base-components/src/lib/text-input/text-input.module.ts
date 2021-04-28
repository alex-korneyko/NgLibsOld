import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import {FormsModule} from '@angular/forms';
import {InputTitleComponent} from '../common/input-title/input-title.component';



@NgModule({
  declarations: [
    TextInputComponent,
    InputTitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    TextInputComponent
  ]
})
export class TextInputModule { }
