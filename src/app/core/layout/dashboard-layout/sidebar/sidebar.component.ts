import { Component, OnInit } from '@angular/core';
import { routes } from '../routes';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  routes = routes;

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
