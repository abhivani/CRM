import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from "./event.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

export const ROUTES: Routes = [{ path: '', component: EventComponent }];

@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [EventComponent]
})
export class EventModule { }
