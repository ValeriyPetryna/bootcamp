import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule  } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { PostComponent } from './posts/components/post/post.component';
import { PostListComponent } from './posts/components/post-list/post-list.component';
import { PostFormComponent } from './posts/components/post-form/post-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LikeComponent } from './shared/components/like/like.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PostListComponent,
    HeaderComponent,
    PostComponent,
    SidebarComponent,
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
