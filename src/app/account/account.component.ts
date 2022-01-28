import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { TokenData } from '../shared/interfaces/user.interface';
import { HttpService } from '../shared/services/http.service';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from '../shared/interfaces/post.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  user!: TokenData;
  userInfo!: any;
  userSub!: Subscription;
  myPosts!: Post[];
  displayedColumns: string[] = ['title', 'createdAt', 'likes'];
  dataSource!: any;

  constructor(public http: HttpService, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.auth.user().subscribe((data) => (this.user = data));
    if (this.user?.id) {
      this.http.getUserById(this.user.id).subscribe((data) => {
        this.userInfo = data;

        this.http.getUserPosts(this.user.id).subscribe((data) => {
          this.myPosts = data;
          this.dataSource = new MatTableDataSource(data);
        });
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
