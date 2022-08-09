import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogboxComponent } from 'src/app/core/common/success-dialogbox/success-dialogbox.component';

@Component({
  selector: 'app-lead-details',
  templateUrl: './lead-details.component.html',
  styleUrls: ['./lead-details.component.css']
})
export class LeadDetailsComponent implements OnInit {

  public contact:boolean = true;
  public lead: boolean;
  public estimate: boolean;
  public praposal: boolean;
  public contract: boolean;
  public notes: boolean;
  public file: boolean;
  public event: boolean;
  public isActive: string = 'contact';

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

  onDetails(path : string){

    this.isActive = path;

    if (path == 'contact') {      
      this.contact = true;
      this.lead = false;
      this.estimate = false;
      this.praposal = false;
      this.contract = false;
      this.notes = false;
      this.file = false;
      this.event = false;      
      return;
    }

    if (path == 'lead') {
      this.contact = false;
      this.lead = true;
      this.estimate = false;
      this.praposal = false;
      this.contract = false;
      this.notes = false;
      this.file = false;
      this.event = false;
      return;
    }
    if (path == 'estimate') {
      this.contact = false;
      this.lead = false;
      this.estimate = true;
      this.praposal = false;
      this.contract = false;
      this.notes = false;
      this.file = false;
      this.event = false;
      return;
    }
    if (path == 'praposal') {
      this.contact = false;
      this.lead = false;
      this.estimate = false;
      this.praposal = true;
      this.contract = false;
      this.notes = false;
      this.file = false;
      this.event = false;
      return;
    }
    if (path == 'contract') {
      this.contact = false;
      this.lead = false;
      this.estimate = false;
      this.praposal = false;
      this.contract = true;
      this.notes = false;
      this.file = false;
      this.event = false;
      return;
    }
    if (path == 'notes') {
      this.contact = false;
      this.lead = false;
      this.estimate = false;
      this.praposal = false;
      this.contract = false;
      this.notes = true;
      this.file = false;
      this.event = false;
      return;
    }
    if (path == 'file') {
      this.contact = false;
      this.lead = false;
      this.estimate = false;
      this.praposal = false;
      this.contract = false;
      this.notes = false;
      this.file = true;
      this.event = false;
      return;
    }
    if (path == 'event') {
      this.contact = false;
      this.lead = false;
      this.estimate = false;
      this.praposal = false;
      this.contract = false;
      this.notes = false;
      this.file = false;
      this.event = true;
      return;
    }
  }

}
