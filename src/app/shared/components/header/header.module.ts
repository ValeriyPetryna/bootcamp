import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './header.component';
import { PostFormModule } from '../post-form/post-form.module';
import { BlogService } from '../../services/blog.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule, PostFormModule, MatDialogModule, RouterModule],
  exports: [HeaderComponent],
  providers:[BlogService]
})
export class HeaderModule {}
