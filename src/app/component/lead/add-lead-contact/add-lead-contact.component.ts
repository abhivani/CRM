import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-lead-contact',
  templateUrl: './add-lead-contact.component.html',
  styleUrls: ['./add-lead-contact.component.css']
})
export class AddLeadContactComponent implements OnInit {

  constructor(
    private _router : Router,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<AddLeadContactComponent>
  ) { }

  ngOnInit(): void {
  }

  Back(){
    this._router.navigate(['/lead'])
  }

  onSubmitClick(){
    this.dialogRef.close();
  }
}
