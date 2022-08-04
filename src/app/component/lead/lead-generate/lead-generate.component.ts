import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lead-generate',
  templateUrl: './lead-generate.component.html',
  styleUrls: ['./lead-generate.component.css']
})
export class LeadGenerateComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  Back(){
    this._router.navigate(['/lead'])
  }

}
