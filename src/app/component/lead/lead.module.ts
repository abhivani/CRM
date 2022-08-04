import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadGenerateComponent } from './lead-generate/lead-generate.component';
import { RouterModule, Routes } from '@angular/router';


export const ROUTES: Routes = [
  {path:'', component:LeadListComponent},
  {path:'leadgenerate', component:LeadGenerateComponent},
]


@NgModule({
  declarations: [
    LeadListComponent,
    LeadGenerateComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    CommonModule
  ],
})
export class LeadModule { }
