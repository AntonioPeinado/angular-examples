import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { passwordValidator } from './password.validator';
@Component({
  selector: 'ps-reactive',
  templateUrl: './reactive.component.html'
})
export class ReactiveComponent {
  form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, passwordValidator()]);
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: this.email,
      password: this.password
    });
  }
  onSubmit(){
    console.log(this.form);
  }
}
