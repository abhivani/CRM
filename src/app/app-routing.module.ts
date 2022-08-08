import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./component/landing/home/home.component";
import { ContainerComponent } from './core/layout/dashboard-layout/container/container.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //Welcome layout routes : start
  {
     path: '',
     component: HomeComponent,
     children: [
      {
        path: 'home',
        loadChildren: () => import('src/app/component/landing/home/home.module').then((m) => m.HomeModule)
      }
     ]
  },
  //Welcome layout routes : end

  //Layout routes : start
  {
    path:'',
    component: ContainerComponent,
    children:[
      {
        path:'dashboard',
        loadChildren: () => import('src/app/component/dashboard/dashboard.module').then((m) => m.DashboardModule),
        data: {}
      },
      {
        path:'lead',
        loadChildren: () => import('src/app/component/lead/lead.module').then((m) => m.LeadModule),
        data: {}
      },
      {
        path:'project',
        loadChildren: () => import('src/app/component/project/project.module').then((m) => m.ProjectModule),
        data: {}
      },
      {
        path:'event',
        loadChildren: () => import('src/app/component/event/event.module').then((m) => m.EventModule),
        data: {}
      },
      {
        path:'customer',
        loadChildren: () => import('src/app/component/customer/customer.module').then((m) => m.CustomerModule),
        data: {}
      }
    ]
  },
  //Layout routes : end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
