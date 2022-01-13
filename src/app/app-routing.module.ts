import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog/components/blog-page/blog-page.component';
import { PostPageComponent } from './post/components/post-page/post-page.component';

const routes: Routes = [
  { path: '', component: BlogPageComponent },
  { path: 'posts/:id', component: PostPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
