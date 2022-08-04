import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  AddLead(){
    this._router.navigate(['/lead/leadgenerate']);
  }


}
