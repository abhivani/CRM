import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-generate',
  templateUrl: './lead-generate.component.html',
  styleUrls: ['./lead-generate.component.css']
})
export class LeadGenerateComponent implements OnInit {

  constructor(private _router : Router,
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<LeadGenerateComponent>
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
