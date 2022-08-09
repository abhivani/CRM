import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogboxComponent } from './success-dialogbox.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SuccessDialogboxComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    SuccessDialogboxComponent
  ]
})
export class SuccessDialogboxModule { }
