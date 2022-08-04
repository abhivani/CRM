import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { BaseComponent } from './core/class/base-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent implements OnInit{
  title = 'CRM';

  constructor(
    private _snackBar: MatSnackBar,
    private _router: Router
  ){
    super(_snackBar); 
    this.subscribeRoute();
  }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    this._router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  subscribeRoute() {
    this._router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }

    if (event instanceof NavigationEnd) {
      this.isLoading = false;
    }

    if (event instanceof NavigationCancel) {
      this.isLoading = false;
    }

    if (event instanceof NavigationError) {
      this.isLoading = false;
    }
  }
}
