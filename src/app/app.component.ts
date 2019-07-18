import { Component } from '@angular/core';
import {Event, Router, NavigationStart, NavigationEnd} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  showLoadingIndicator = true;
  constructor(private __router: Router) {
    this.__router.events.subscribe((routerEvent: Event) => {
      if(routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if(routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }

    })
  }
  
}
