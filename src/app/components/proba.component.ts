import { Component, Input } from '@angular/core';

@Component({
  selector: 'proba',
  template: `
  <h3> Post Component </h3>
  <hr>
   <div *ngFor="let post of postItem">
    <h3> {{post.title}} </h3>
    <p> {{post.body}} </p>
  </div>
  `,
})
export class ProbaComponent  { 
    @Input()  postItem:any;
 }