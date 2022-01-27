import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
// import { PostComponent } from '../blog/components/post/post.component';
// import { PostComponent } from '../blog/components/post/post.component';
import { MatListModule } from '@angular/material/list';
// import { BlogModule } from '../blog/blog.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule,MatInputModule, MatButtonModule, MatTabsModule, MatListModule, MatTableModule, MatFormFieldModule],
  exports: [AccountComponent],
  // providers: [PostComponent],
})
export class AccountModule {}
