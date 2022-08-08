import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogboxComponent } from 'src/app/core/common/success-dialogbox/success-dialogbox.component';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']
})
export class LeadDetailsComponent implements OnInit {

  constructor(
    private _dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const dialogRef = this._dialog.open(SuccessDialogboxComponent,
    {
      width : '90%',
      height: '90%',
      disableClose : true
    });
  }



}
