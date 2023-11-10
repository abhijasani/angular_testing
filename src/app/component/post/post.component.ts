import { Component, EventEmitter, Input, Output } from '@angular/core';
import { post } from 'src/app/model/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post: post | null = null;
  @Output() delete = new EventEmitter<void>();
  OnDeletePost(event: Event) {
    event.stopPropagation();
    this.delete.emit();
  }
}
