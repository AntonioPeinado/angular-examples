import { NgModule } from '@angular/core';
import { BindingComponent } from './binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BindingComponent
  ],
  exports: [
    BindingComponent
  ],
  imports: [
    FormsModule
  ]
})
export class BindingModule {}
