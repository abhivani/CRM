import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BaseComponent } from '../../class/base-component';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent extends BaseComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {
    super(_snackBar)
  }

  ngOnInit(): void {
  }

}
