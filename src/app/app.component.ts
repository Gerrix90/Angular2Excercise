import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li><a routerLink="/"> User Component</a></li>
    <li><a routerLink="/about"> About Component</a></li>
  </ul>
  <hr>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
