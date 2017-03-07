import { Component } from '@angular/core';
import {PostService} from './service/post.service';

@Component({
  selector: 'user',
  template: `<h1>User Component</h1>

  <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f); title.value=''; body.value=''">
      <label>
        <span>Title</span>
        <input
          type="text"
          placeholder="Title"
          name="title"
          ngModel
          #postItemTitle="ngModel"
          #title
          minlength="2"
          required>
      </label>
      <div *ngIf="postItemTitle.errors?.required && postItemTitle.touched" >
        Title is required
       </div>
       <div *ngIf="postItemTitle.errors?.minlength && postItemTitle.touched" >
        Minimum of 2 characters
        </div>
        <label>
        <span>Body</span>
        <input
          type="text"
          placeholder="Body"
          name="body"
          ngModel
          #postItemBody="ngModel"
          #body
          minlength="20"
          required>
      </label>
      <div *ngIf="postItemBody.errors?.required && postItemBody.touched" >
        Body is required
       </div>
       <div *ngIf="postItemBody.errors?.minlength && postItemBody.touched" >
        Minimum of 20 characters
        </div>
      <button type="submit" [disabled]="f.invalid">Submit</button>
    </form>
    <hr>

  <proba [postItem]="posts"></proba>
  `,
  providers: [PostService]
})
export class UserComponent  {
  posts:Post[];
  postItem: Post ={
    id:0,
    title:"",
    body:""
  };

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
