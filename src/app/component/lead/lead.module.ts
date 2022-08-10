import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadListComponent } from './lead-list/lead-list.component';
import { LeadGenerateComponent } from './lead-generate/lead-generate.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule} from '@angular/material/paginator';
import { LeadDetailsComponent } from './lead-details/lead-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SuccessDialogboxModule } from 'src/app/core/common/success-dialogbox/success-dialogbox.module';
import { AddLeadContactComponent } from './add-lead-contact/add-lead-contact.component';
import { MatIconModule } from '@angular/material/icon';


export const ROUTES: Routes = [
  {path:'', component:LeadListComponent},
  {path:'leadgenerate', component:LeadGenerateComponent},
  {path:'leaddetails', component:LeadDetailsComponent},
  {path:'addleadcontact', component:AddLeadContactComponent}
]


@NgModule({
  declarations: [
    LeadListComponent,
    LeadGenerateComponent,
    LeadDetailsComponent,
    AddLeadContactComponent
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    SuccessDialogboxModule,
    MatIconModule
  ],
})
export class LeadModule { }
