import { NgModule } from '@angular/core';
import { TemplatesModule } from './templates/templates.module';
import { DataModule } from './data/data.module';

@NgModule({
  exports: [
    TemplatesModule,
    DataModule
  ]
})
export class ExamplesModule {}
