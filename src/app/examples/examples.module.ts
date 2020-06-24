import { NgModule } from '@angular/core';
import { TemplatesModule } from './templates/templates.module';
import { BindingModule } from './binding/binding.module';

@NgModule({
  exports: [
    TemplatesModule,
    BindingModule
  ]
})
export class ExamplesModule {}
