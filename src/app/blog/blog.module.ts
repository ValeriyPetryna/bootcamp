import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { PostComponent } from './components/post/post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BlogService } from '../shared/services/blog.service';
import { HttpService } from '../shared/services/http.service';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [BlogPageComponent, PostComponent, SidebarComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [BlogPageComponent, PostComponent],
  providers: [
    BlogService,
    HttpService,
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
