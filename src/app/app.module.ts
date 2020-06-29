import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ExamplesModule } from './examples/examples.module';
import { ExercisesModule } from './exercises/exercises.module';
import { AppRoutingModule } from './app.routing';
import { FormModule } from './examples/form/form.module';
@NgModule({
  // elementos que vamos a utilizar dentro del módulo
  declarations: [
    AppComponent
  ],
  // módulos que vamos a utilizar
  imports: [
    BrowserModule,
    CommonModule,
    ExamplesModule,
    ExercisesModule,
    AppRoutingModule,
    FormModule
  ],
  // componente de entrada de este módulo
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
