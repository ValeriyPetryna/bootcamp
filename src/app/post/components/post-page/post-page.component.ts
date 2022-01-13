import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../../shared/interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/shared/services/blog.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit, OnDestroy {
  public id!: string | null;
  public notFound!: boolean;
  public post!: Post;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private snackBarService: SnackBarService, private httpService: HttpService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.httpService.getPostById(this.id).subscribe({
        next: (data) => (this.post = data),
        error: (e) => {
          console.error(e);
          this.notFound = true;
        },
      });
    } else {
      this.notFound = true;
    }
  }

  public deletePost(id: string): void {
    this.httpService.deletePostById(id).subscribe({
      next: (res: unknown) => {
        this.blogService.filterPostData(id);
        this.snackBarService.openSnackBar(res);
      },
      error: (err: HttpErrorResponse) => {
        this.snackBarService.openSnackBar(err);
      },
    });
  }

  ngOnDestroy(): void {}
}
