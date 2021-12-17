import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../shared/interfaces/post.interface';
import { PostFormService } from '../../services/post-form.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit, OnDestroy {
  postServiceSubscription!: Subscription;
  posts!: Observable<Post[]>;

  constructor(private postService: PostFormService) {}

  ngOnInit(): void {
    // get posts, subscribe on service data or use async pipe
    this.posts = this.postService.getPosts();
  }

  ngOnDestroy(): void {
  }
}
