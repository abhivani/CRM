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
            data: {icon: 'user', text:'Customer'},
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
            data: {icon: 'event', text:'Event'},
            item: [],
            showMenu: false
      },
      {
            path:'support',
            data: {icon: 'assignment_turned_in', text:'IT Support'},
            item: [],
            showMenu: false
      }
]




    export class IconSvgExample {
      constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        // Note that we provide the icon here as a string literal here due to a limitation in
        // Stackblitz. If you want to provide the icon from a URL, you can use:
        // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
        iconRegistry.addSvgIconLiteral('event', sanitizer.bypassSecurityTrustHtml(EVENT_ICON));
        iconRegistry.addSvgIconLiteral('user', sanitizer.bypassSecurityTrustHtml(USER_ICON));
      }
    }
    
    const EVENT_ICON = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24.6 38H9q-1.25 0-2.125-.875T6 35V11q0-1.25.875-2.125T9 8h3V4h3v4h14V4h3v4h3q1.25 0 2.125.875T38 11v13.6q-.4-.05-.75-.075-.35-.025-.75-.025t-.75.025q-.35.025-.75.075V17H9v18h15.6q-.05.4-.075.75-.025.35-.025.75t.025.75q.025.35.075.75ZM35 44v-6h-6v-3h6v-6h3v6h6v3h-6v6Z"/></svg>';
    const USER_ICON = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M36.5 28v-6.5H30v-3h6.5V12h3v6.5H46v3h-6.5V28ZM18 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM2 40v-4.7q0-1.75.9-3.175Q3.8 30.7 5.4 30q3.75-1.65 6.675-2.325Q15 27 18 27t5.925.675Q26.85 28.35 30.55 30q1.6.75 2.525 2.15.925 1.4.925 3.15V40Zm3-3h26v-1.7q0-.8-.4-1.525-.4-.725-1.25-1.075-3.5-1.7-5.975-2.2Q20.9 30 18 30t-5.375.525Q10.15 31.05 6.6 32.7q-.75.35-1.175 1.075Q5 34.5 5 35.3Zm13-16.05q1.95 0 3.225-1.275Q22.5 18.4 22.5 16.45q0-1.95-1.275-3.225Q19.95 11.95 18 11.95q-1.95 0-3.225 1.275Q13.5 14.5 13.5 16.45q0 1.95 1.275 3.225Q16.05 20.95 18 20.95Zm0-4.5ZM18 30Z"/></svg>';
    