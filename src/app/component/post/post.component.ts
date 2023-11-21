import { Component, EventEmitter, Input, Output } from '@angular/core';
import { post } from 'src/app/model/post';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!: post;
  @Output() delete = new EventEmitter<post>();
  OnDeletePost(event: Event) {
    event.stopPropagation();
    this.delete.emit(this.post);
  }
}
