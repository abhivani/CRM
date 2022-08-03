import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/landing/home/home.component";
import {LoginComponent} from "./component/account/login/login.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {ForgetPasswordComponent} from "./component/account/forget-password/forget-password.component";
import {FooterComponent} from "./component/dashboard/footer/footer.component";
import {HeaderComponent} from "./component/dashboard/header/header.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'forgetpassword', component:ForgetPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  exports: [RouterModule, FooterComponent, HeaderComponent]
})
export class AppRoutingModule { }
