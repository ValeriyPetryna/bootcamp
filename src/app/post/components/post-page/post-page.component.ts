import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../../../shared/interfaces/post.interface';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/shared/services/blog.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { HttpService } from 'src/app/shared/services/http.service';
import { TokenData } from 'src/app/shared/interfaces/user.interface';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { PostFormComponent } from 'src/app/shared/components/post-form/post-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit, OnDestroy {
  public id!: string | null;
  public notFound!: boolean;
  public post!: Post;
  public form: FormGroup = new FormGroup({});
  public validateForm!: boolean;

  public showComments = true;
  public buttonName = 'Show comments';

  user!: TokenData;
  isUserLogged!: boolean;

  loginSub!: Subscription;
  userSub!: Subscription;

  public modalOptions: object = {
    width: '500px',
    height: '500px',
  };

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private snackBarService: SnackBarService,
    private httpService: HttpService,
    private auth: AuthService,
    public modal: MatDialog,
    public fb: FormBuilder
  ) {
    this.form = fb.group({
      comment: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.updatePostData();

    this.loginSub = this.auth.isLoggedIn().subscribe((data) => (this.isUserLogged = data));
    this.userSub = this.auth.user().subscribe((data) => (this.user = data));
  }

  public deletePost(id: string): void {
    this.httpService.deletePostById(id).subscribe({
      next: (res: any) => {
        this.blogService.filterPostData(id);
        this.snackBarService.openSnackBar(res);
      },
    });
  }

  public deleteComment(id: string): void {
    this.httpService.removeComment(id).subscribe({
      next: (res: any) => {
        this.post.comments = this.post.comments?.filter((item) => item._id !== id);
        // this.snackBarService.openSnackBar(res);
      },
    });
  }

  public toggle(): void {
    this.showComments = !this.showComments;
    this.buttonName = !this.showComments ? 'Hide comments' : 'Show comments';
  }

  public editPost(post: Post): void {
    this.modal.open(PostFormComponent, { ...this.modalOptions, data: post });
  }

  public onSubmit() {
    if (this.form.valid) {
      const comment: any = {
        content: this.form.value.comment,
        postId: this.post._id,
      };

      this.httpService.addComment(comment).subscribe(() => this.updatePostData());

      this.form.reset();
    } else {
      this.validateForm = true;
    }
  }

  private updatePostData(): void {
    if (this.id) {
      this.httpService.getPostById(this.id).subscribe({
        next: (data) => {
          this.post = data;
        },
        error: () => {
          this.notFound = true;
        },
      });
    } else {
      this.notFound = true;
    }
  }

  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
    this.userSub.unsubscribe();
  }
}
