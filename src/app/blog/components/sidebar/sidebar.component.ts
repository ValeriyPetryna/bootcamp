import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/interfaces/post.interface';
import { BlogService } from 'src/app/shared/services/blog.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  tags!: Array<Tag>;

  constructor(private blogService: BlogService, private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getTags().subscribe({
      next: (data) => (this.tags = data),
      error: (e) => console.error(e),
    });
  }

  public filterByTag(tag = ''): void {
    this.blogService.feedPosts(tag);
  }
}
