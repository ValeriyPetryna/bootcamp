import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from 'src/app/shared/components/post-form/post-form.component';
import { BlogService } from '../../services/blog.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Subscription } from 'rxjs';
import { TokenData } from '../../interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  title: string = 'My Blog';

  user!: TokenData;
  isUserLogged!: boolean;

  loginSub!: Subscription;
  userSub!: Subscription;

  modalOptions: object = {
    width: '500px',
    height: '500px',
  };

  constructor(public modal: MatDialog, public blogService: BlogService, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.loginSub = this.auth.isLoggedIn().subscribe((data) => (this.isUserLogged = data));
    this.userSub = this.auth.user().subscribe((data) => (this.user = data));
  }

  public openDialog(): void {
    this.modal.open(PostFormComponent, this.modalOptions);
  }

  public refreshData(): void {
    if (this.router.url.match(/tag/i)) {
      this.blogService.feedPosts();
    }
  }

  public logOut(): void {
    this.auth.logout();
  }

  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
    this.userSub.unsubscribe();
  }
}
