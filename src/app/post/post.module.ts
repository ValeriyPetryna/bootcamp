import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PostPageComponent } from './components/post-page/post-page.component';
import { BlogService } from '../shared/services/blog.service';
import { SnackBarService } from '../shared/services/snack-bar.service';
import { HttpService } from '../shared/services/http.service';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [PostPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [PostPageComponent],
  providers: [BlogService, SnackBarService, HttpService],
})
export class PostModule {}
