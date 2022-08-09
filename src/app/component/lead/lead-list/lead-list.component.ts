import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import {Subject} from 'rxjs';
import { LeadGenerateComponent } from './../lead-generate/lead-generate.component';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  constructor(
    private _router : Router,
    private _dialog : MatDialog
    ) { }

  ngOnInit(): void {
  }

  generateLead(){
    const dialogRef = this._dialog.open(LeadGenerateComponent,
      {
        width : '90%',
        height: '90%',
        disableClose : true
      });
  }

  Back(){
    this._router.navigate(['/lead'])
  }


  

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

  
  fileName= 'ExcelSheet.xlsx';
  
  lead_list = [{
    Sno: 1,
    Company_name : 'Example',
    Contact_Person : 'example person',
    Email : 'example@gmail.com',
    contact : 987654321,
    create_date : '01/08/2022'


  }]

  exportexcel(): void
  {
    

    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }

}


