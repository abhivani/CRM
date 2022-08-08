import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialogbox',
  templateUrl: './success-dialogbox.component.html',
  styleUrls: ['./success-dialogbox.component.css']
})
export class SuccessDialogboxComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<SuccessDialogboxComponent>
  ) { }

  ngOnInit(): void {
  }

  onSubmitClick(){
    this.dialogRef.close();
  }

}
