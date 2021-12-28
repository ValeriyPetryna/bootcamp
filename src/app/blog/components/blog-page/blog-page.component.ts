import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../shared/interfaces/post.interface';
import { BlogService } from '../../../shared/services/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
})
export class BlogPageComponent implements OnInit, OnDestroy {
  posts!: Post[];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.feedPosts().subscribe(data => this.posts = data);
  }

  ngOnDestroy(): void {
  }
}
