import { Component, ViewChild } from "@angular/core";
import { NgForm } from '@angular/forms';

interface Login {
  email: string,
  password: string
}

@Component({
  selector: 'ps-declarative',
  templateUrl: './declarative.component.html'
})
export class DeclarativeComponent {
  @ViewChild('form') form: NgForm;
  model: Login = {
    email: '',
    password: ''
  };
  onSubmit(form){
    console.log(this.model, this.form);
  }
  showEmailError(email, form){
    return email.invalid && form.submitted || email.touched;
  }
}
