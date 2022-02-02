import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { PostFormModule } from '../post-form/post-form.module';
import { BlogService } from '../../services/blog.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { MaterialModule } from '../../modules/material.module';

import { AngularEditorModule } from '@kolkov/angular-editor';


@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule, PostFormModule, RouterModule, MaterialModule, AngularEditorModule],
  exports: [HeaderComponent],
  providers: [BlogService, AuthService],
})
export class HeaderModule {}
