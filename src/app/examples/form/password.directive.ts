import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[psPassword]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }]
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl) {
    const isValidPassword = control.value && control.value.length > 3 && control.value.length < 12;
    if (isValidPassword) {
      return null;
    }
    return { password: 'La contraseña tiene un formato invalido' };
  }
}
