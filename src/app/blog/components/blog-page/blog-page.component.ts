import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../../shared/interfaces/post.interface';
import { BlogService } from '../../../shared/services/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit, OnDestroy {
  posts!: Post[];
  tag!: any; // todo: add type
  subscription!: Subscription

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.tag = this.activatedRoute.snapshot.queryParamMap.get('tag');

    this.blogService.feedPosts(this.tag);

    this.subscription = this.blogService.getPostData().subscribe((posts) => (this.posts = posts));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
