import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PostPageComponent } from './components/post-page/post-page.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BlogService } from '../shared/services/blog.service';
import { SnackBarService } from '../shared/services/snack-bar.service';
import { HttpService } from '../shared/services/http.service';

@NgModule({
  declarations: [PostPageComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule, MatProgressBarModule, MatSnackBarModule],
  exports: [PostPageComponent],
  providers: [BlogService, SnackBarService, HttpService],
})
export class PostModule {}
