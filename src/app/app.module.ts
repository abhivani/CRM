import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/landing/home/home.component';
import { LoginComponent } from './component/account/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ForgetPasswordComponent } from './component/account/forget-password/forget-password.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './core/layout/dashboard-layout/layout.module';

export const ROUTES: Routes = [
  {path:'login', component:LoginComponent},
  {path:'forgetpassword', component:ForgetPasswordComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    RouterModule.forChild(ROUTES),
    FormsModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
