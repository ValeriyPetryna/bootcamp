import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './header.component';
import { PostFormModule } from '../post-form/post-form.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ReactiveFormsModule, PostFormModule, MatDialogModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
