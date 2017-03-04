import { Component } from '@angular/core';
import {PostService} from './service/post.service';

@Component({
  selector: 'user',
  template: `<h1>User Component</h1>
  <proba [postItem]="posts"></proba>
  `,
  providers: [PostService]
})
export class UserComponent  {
  posts:Post[];

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
