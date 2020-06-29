import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { HTTPComponent } from './http.component';

@NgModule({
  declarations: [
    HTTPComponent,
  ],
  exports: [
    HTTPComponent
  ],
  imports: [HttpClientModule]
})
export class HTTPModule {}
