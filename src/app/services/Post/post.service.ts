import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { post } from 'src/app/model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getpost() {
    return this.http.get<post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  deletepost(post: post) {
    return this.http.delete<post[]>('https://jsonplaceholder.typicode.com/post/${post.id}');
  }
}
