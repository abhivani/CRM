import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppRoute } from 'src/app/core/class/app-route';
import { BaseComponent } from './../../core/class/base-component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  AppRoute = AppRoute;
  
  constructor(
    private _router: Router,
    private _snackBar: MatSnackBar,
  ) { 
    super(_snackBar);
  }

  ngOnInit(): void {
  }

  navigateTo(path: string) {
    this._router.navigate([path]);
  };

}
