import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Post } from '../../../shared/interfaces/post.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { Subscription } from 'rxjs';
import { TokenData } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post!: Post;
  toggle!: boolean | undefined;
  user!: TokenData;
  loggedIn = false;
  userSub!: Subscription;

  constructor(private httpService: HttpService, private auth: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.auth.user().subscribe((data) => {
      if(data) {
        this.user = data;
        this.loggedIn = true;
        this.toggle = this.post.likes?.some((el) => el.userId == this.user.id);
      }
    });
  }

  public likePost(post: Post): void {
    if(this.loggedIn) {
      this.toggle = !this.toggle;
      this.toggle ? post.likes?.push('fakeId') : post.likes?.splice(post.likes.indexOf('fakeId'), 1);
  
      this.httpService.likeToggle({ postId: this.post._id }).subscribe();
    }
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
