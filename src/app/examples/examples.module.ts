import { NgModule } from '@angular/core';
import { TemplatesModule } from './templates/templates.module';
import { DataModule } from './data/data.module';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { ServicesModule } from './services/services.module';
import { HTTPModule } from './http/http.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    TemplatesModule,
    DataModule,
    PipesModule,
    DirectivesModule,
    ServicesModule,
    HTTPModule,
    FormsModule
  ]
})
export class ExamplesModule {}
