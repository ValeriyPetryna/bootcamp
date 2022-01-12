import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  toggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public likePost(post: Post): void {
    //todo: add request to api
    this.toggle = !this.toggle;
    this.toggle ? post.likes?.push('fakeId') : post.likes?.splice(0, 1);
  }
}
