import {NgModule} from '@angular/core';
import { FizzBuzzComponent } from './fizz-buzz.component';
import { ExercisesComponent } from './exercises.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FizzBuzzComponent,
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
