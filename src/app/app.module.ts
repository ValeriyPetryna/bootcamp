import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/services/auth.interceptor';

import { BlogModule } from './blog/blog.module';
import { PostModule } from './post/post.module';
import { HeaderModule } from './shared/components/header/header.module';
// import { AccountComponent } from './account/account.component';
import { HttpErrorInterceptor } from './shared/services/errorHandler.interceptor';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, BlogModule, HeaderModule, PostModule, AuthModule, AccountModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
