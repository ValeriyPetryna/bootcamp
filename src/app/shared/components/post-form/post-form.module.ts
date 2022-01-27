import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { PostFormComponent } from './post-form.component';

import { HttpService } from '../../services/http.service';
import { BlogService } from '../../services/blog.service';

@NgModule({
  declarations: [PostFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule],
  exports: [PostFormComponent],
  providers: [HttpService, BlogService]
})
export class PostFormModule {}
