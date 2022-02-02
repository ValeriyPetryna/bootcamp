import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { TokenData } from '../shared/interfaces/user.interface';
import { HttpService } from '../shared/services/http.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit, AfterViewInit {
  // user info
  user!: TokenData;
  userInfo!: any;
  userSub!: Subscription;

  // tables info
  tableColumns: string[] = ['title', 'published', 'likes'];
  ownPosts!: any;
  likedPosts!: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public http: HttpService, private auth: AuthService) {}

  ngAfterViewInit() {
    this.http.getLikedPosts(this.user?.id).subscribe((data) => {
      const parsed = data.map((el: { postId: { title: string; _id: string; likes: Array<string>; createdAt: Date }; userId: { username: string } }) => {
        return {
          title: el?.postId?.title,
          postId: el.postId._id,
          createdAt: el.postId.createdAt,
          author: el.userId.username,
          likes: el.postId.likes,
        };
      });

      this.likedPosts = new MatTableDataSource(parsed);
      this.likedPosts.paginator = this.paginator;
      this.likedPosts.sort = this.sort;
      this.likedPosts.sortingDataAccessor = (item: any, property: any) => {
        switch (property) {
          case 'published': {
            const newDate = new Date(item.createdAt);
            return newDate;
          }
          default: {
            return item[property];
          }
        }
      }
    });
  }

  ngOnInit(): void {
    this.userSub = this.auth.user().subscribe((data) => (this.user = data));
    if (this.user?.id) {
      this.http.getUserById(this.user.id).subscribe((data) => {
        this.userInfo = data;

        this.http.getUserPosts(this.user.id).subscribe((data) => {
          this.ownPosts = new MatTableDataSource(data);
        });
      });
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.ownPosts.filter = filterValue.trim().toLowerCase();
  }

  applyFilterPaginator(event: Event): void {
    console.log(event)
    const filterValue = (event.target as HTMLInputElement).value;
    this.likedPosts.filter = filterValue.trim().toLowerCase();

    if (this.likedPosts.paginator) {
      this.likedPosts.paginator.firstPage();
    }
  }
}
