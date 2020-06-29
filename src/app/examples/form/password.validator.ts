import { ValidatorFn, AbstractControl } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const isValidPassword  = control.value && control.value.length > 3 && control.value.length < 12;
    if(isValidPassword){
      return null;
    }
    return {password: 'La contraseña tiene un formato invalido'};
  };
}
