import { Component } from '@angular/core';

@Component({
  selector: 'ps-exercises',
  templateUrl: './exercises.component.html'
})
export class ExercisesComponent {
  value = "abc"
  onChange(reverse: string){
    alert(reverse);
  }
}
