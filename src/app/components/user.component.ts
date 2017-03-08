import { Component } from '@angular/core';
import {PostService} from './service/post.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'user',
  template: `<h1>User Component</h1>

  <form  [formGroup]="form" (ngSubmit)="onSubmit(form); title.value=''; body.value=''">
      <label>
        <span>Title</span>
        <input
          type="text"
          placeholder="Title"
          name="title"
          minlength=3
          formControlName="title"
          #title>
      </label>
      <div *ngIf="form.controls.title.errors?.pattern">
      Invalid character!
      </div>
      <label>
        <span>Body</span>
        <input
          type="text"
          placeholder="Body"
          name="body"
          formControlName="body"
          #body>
      </label>
      <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>
    <hr>

  <proba [postItem]="posts" ></proba>
  `,
  providers: [PostService]
})
export class UserComponent  {
  form:any;
  posts:Post[];

  ngOnInit(){
    this.form = new FormGroup({
      title: new FormControl('', Validators.compose([Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')])),
      body: new FormControl('')

    });
  }
  onSubmit({value, valid}: {value:Post, valid:boolean}){
    this.posts.push(value);
  }

  constructor(private postService:PostService){
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

}
interface Post{
  id: number;
  title: string;
  body: string;
}
