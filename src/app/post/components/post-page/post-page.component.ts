import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Observable, Subscription } from 'rxjs';
import { Post } from '../../../shared/interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BlogService } from 'src/app/shared/services/blog.service';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit, OnDestroy {
  public id!: string | null;
  public notFound!: boolean;
  public post!: Post;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.blogService.getPostById(this.id).subscribe({
        next: (data) => this.post = data,
        error: (e) => {
          console.error(e);
          this.notFound = true;
        }
      })
    } else {
      this.notFound = true;
    }

    // should get posts on init, subscribe on service data or use async pipe
    // this.posts = this.postService.getPosts();
  }

  ngOnDestroy(): void {
  }
}
