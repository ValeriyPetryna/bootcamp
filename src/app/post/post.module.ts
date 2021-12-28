import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPageComponent } from './components/post-page/post-page.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostPageComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule, MatProgressBarModule],
  exports: [PostPageComponent],
})
export class PostModule {}
