import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoute } from 'src/app/core/class/app-route';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  AppRoute = AppRoute;
  
  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.login();
  }

  login(){
    alert('User is sucessfully logged IN !!!');
  }

  navigateTo(path: string) {
    this._router.navigate([path]);
  };

}
