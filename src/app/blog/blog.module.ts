import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { PostComponent } from './components/post/post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [BlogPageComponent, PostComponent, SidebarComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
  exports: [BlogPageComponent],
})
export class BlogModule {}
