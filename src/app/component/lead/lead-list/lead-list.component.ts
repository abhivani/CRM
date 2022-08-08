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

  generateLead(){
    this._router.navigate(['/lead/leadgenerate']);
  }

  Back(){
    this._router.navigate(['/lead'])
  }


  lead_list = [{
    Sno: 1,
    Company_name : 'Example',
    Contact_Person : 'example person',
    Email : 'example@gmail.com',
    contact : 987654321,
    create_date : '01/08/2022'


  }]
}
