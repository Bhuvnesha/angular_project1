import { Component } from '@angular/core';
import { Route, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ultrac B2B';

  IsSignInPage : boolean = true;

  constructor(private router: Router) {
    // Subscribe to router events to update the link display based on the current route
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.IsSignInPage = this.router.url === '/signIn';
      }
    });
  } 

}
