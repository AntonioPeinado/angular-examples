import {NgModule} from '@angular/core';
import { FizzBuzzComponent } from './fizz-buzz.component';
import { ExercisesComponent } from './exercises.component';
import { CommonModule } from '@angular/common';
import { Ej2Component } from './ej2.component';

@NgModule({
  declarations: [
    FizzBuzzComponent,
    Ej2Component,
    ExercisesComponent
  ],
  exports: [
    ExercisesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ExercisesModule {}
