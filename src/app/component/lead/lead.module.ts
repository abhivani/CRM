import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadGenerateComponent } from './lead-generate/lead-generate.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCard, MatCardModule } from '@angular/material/card';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { LeadDetailsComponent } from './lead-details/lead-details.component';

export const ROUTES: Routes = [
  {path:'', component:LeadListComponent},
  {path:'leadgenerate', component:LeadGenerateComponent},
  {path:'leaddetails', component:LeadDetailsComponent}
]


@NgModule({
  declarations: [
    LeadListComponent,
    LeadGenerateComponent,
    LeadDetailsComponent,
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    MatCardModule,
    MatPaginatorModule
  ],
})
export class LeadModule { }
