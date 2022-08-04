import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgModule } from '@angular/core';

import { LoaderComponent } from './loader.component';



@NgModule({
  declarations: [LoaderComponent],
  imports: [
    MatProgressSpinnerModule
  ],
  exports:[LoaderComponent]
})
export class LoaderModule { }
