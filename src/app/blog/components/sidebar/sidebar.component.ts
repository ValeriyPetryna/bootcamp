import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  tags!: any; // todo: add type 

  constructor(private blogService: BlogService, private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getTags().subscribe({
      next: (data) => (this.tags = data),
      error: (e) => console.error(e),
    });
  }

  public filterByTag(tag: string = ''): void {
    this.blogService.feedPosts(tag);
  }
}
