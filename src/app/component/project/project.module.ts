import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectManagmentComponent } from './project-managment/project-managment.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
  {path:'', component:ProjectManagmentComponent}
]

@NgModule({
  declarations: [
    ProjectManagmentComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule
  ]
})
export class ProjectModule { }
