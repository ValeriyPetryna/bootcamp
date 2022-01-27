import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './header.component';
import { PostFormModule } from '../post-form/post-form.module';
import { BlogService } from '../../services/blog.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule, PostFormModule, MatDialogModule, RouterModule, MatButtonModule, MatIconModule, MatMenuModule],
  exports: [HeaderComponent],
  providers: [BlogService, AuthService],
})
export class HeaderModule {}
