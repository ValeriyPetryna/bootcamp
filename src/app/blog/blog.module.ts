import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { PostComponent } from './components/post/post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { BlogService } from '../shared/services/blog.service';
import { HttpService } from '../shared/services/http.service';
@NgModule({
  declarations: [BlogPageComponent, PostComponent, SidebarComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule, MatChipsModule, MatProgressBarModule],
  exports: [BlogPageComponent],
  providers: [
    BlogService,
    HttpService
    /*
    for now commented due to possibility send new http request after filtering by tags
    {
       provide: APP_INITIALIZER,
       useFactory: (posts: BlogService) => async () => posts.feedPosts(),
       deps: [BlogService],
       multi: true
     }
    */
  ],
})
export class BlogModule {}
