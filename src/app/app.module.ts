import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PostListComponent } from './posts/components/post-list/post-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostComponent } from './posts/components/post/post.component';
import { AsideComponent } from './aside/aside.component';
import { LikeComponent } from './shared/components/like/like.component';

import { ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from './posts/components/post-form/post-form.component';

import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PostListComponent,
    HeaderComponent,
    PostComponent,
    AsideComponent,
    LikeComponent,
    PostFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
