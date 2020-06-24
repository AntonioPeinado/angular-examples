import { NgModule } from '@angular/core';
import { ConditionalComponent } from './conditional.component';
import { InterpolationComponent } from './interpolation.component';
import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ConditionalComponent,
    InterpolationComponent,
    ListComponent
  ],
  exports: [
    ConditionalComponent,
    InterpolationComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplatesModule {}
