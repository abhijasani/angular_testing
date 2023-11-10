import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/model/post';
import { PostService } from 'src/app/services/Post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: post[] = [];

  constructor(private postservices: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postservices.getpost().subscribe((posts) => {
      this.posts = posts;
    })
  }

  delete(post: post) {
    this.posts = this.posts.filter((p) => p.id != post.id);
    this.postservices.deletepost(post).subscribe();
  }

}
