import { Component } from '@angular/core';
interface Foo {
  a: string;
}
@Component({
  selector: 'ps-exercises',
  templateUrl: './exercises.component.html'
})
export class ExercisesComponent {
  value = "abc";
  obj?: Foo;
  onChange(reverse: string){
    alert(reverse);
  }
}
