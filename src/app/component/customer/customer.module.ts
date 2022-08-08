import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule, Routes } from '@angular/router';
export const ROUTES: Routes = [{ path: '', component: CustomerComponent }];


@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class CustomerModule { }
