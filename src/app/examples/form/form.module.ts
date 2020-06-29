import { NgModule } from "@angular/core";
import { DeclarativeComponent } from './declarative.component';
import { ReactiveComponent } from './reactive.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordValidatorDirective } from './password.directive';

@NgModule({
  declarations: [
    DeclarativeComponent,
    ReactiveComponent,
    PasswordValidatorDirective
  ],
  exports: [
    DeclarativeComponent,
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class FormModule {}
