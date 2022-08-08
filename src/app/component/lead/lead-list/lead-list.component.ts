import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {Subject} from 'rxjs';

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

  // Pagination code start

  changes = new Subject<void>();
  firstPageLabel = $localize`First page`;
  itemsPerPageLabel = $localize`Items per page:`;
  lastPageLabel = $localize`Last page`;

  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Page ${page + 1} of ${amountPages}`;
  }

  // Pagination code end

  
}


