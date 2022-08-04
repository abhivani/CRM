import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {path:'', component:HomeComponent},
]

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class HomeModule { }
