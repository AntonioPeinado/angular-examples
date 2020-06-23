import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './examples/0-templates/interpolation.component';
import { ConditionalComponent } from './examples/0-templates/conditional.component';
import { ListComponent } from './examples/0-templates/list.component';
@NgModule({
  // elementos que vamos a utilizar dentro del módulo
  declarations: [
    AppComponent,
    InterpolationComponent,
    ConditionalComponent,
    ListComponent
  ],
  // módulos que vamos a utilizar
  imports: [
    BrowserModule,
    CommonModule
  ],
  // componente de entrada de este módulo
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
