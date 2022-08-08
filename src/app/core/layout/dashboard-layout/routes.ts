import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

export const routes =[
      {
            path:'dashboard',
            data: {icon: 'home', text:'Home'},
            item: [],
            showMenu: false
      },
      {
            path:'lead',
            data: {icon: 'assignment_turned_in', text:'Lead'},
            item: [],
            showMenu: false
      },
      {
            path:'customer',
            data: {icon: 'library_add', text:'Customer'},
            item: [],
            showMenu: false
      },
      {
            path:'project',
            data: {icon: 'assignment_turned_in', text:'Project'},
            item: [],
            showMenu: false
      },
      {
            path:'task',
            data: {icon: 'local_offer', text:'Task'},
            item: [],
            showMenu: false
      },
      {
            path:'event',
            data: {icon: 'calendar_today', text:'Event'},
            item: [],
            showMenu: false
      },
      {
            path:'support',
            data: {icon: 'support_agent', text:'IT Support'},
            item: [],
            showMenu: false
      }
]

    
    