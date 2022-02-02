import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PostFormComponent } from './post-form.component';
import { HttpService } from '../../services/http.service';
import { BlogService } from '../../services/blog.service';
import { MaterialModule } from '../../modules/material.module';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule({
  declarations: [PostFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, AngularEditorModule ],
  exports: [PostFormComponent],
  providers: [HttpService, BlogService]
})
export class PostFormModule {}
