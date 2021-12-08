import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../../shared/interfaces/post.interface';
import { PostFormService } from '../../services/post-form.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit, OnDestroy {
  postServiceSubscription!: Subscription;
  posts: Post[] = [];

  constructor(private postService: PostFormService) {}

  ngOnInit(): void {
    this.postServiceSubscription = this.postService
      .getPostData()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }

  ngOnDestroy(): void {
    this.postServiceSubscription.unsubscribe();
  }
}
