import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { RegistrationPageComponent } from './auth/components/registration-page/registration-page.component';
import { AuthGuardService } from './auth/services/auth.guard';
import { BlogPageComponent } from './blog/components/blog-page/blog-page.component';
import { PostPageComponent } from './post/components/post-page/post-page.component';

const routes: Routes = [
  { path: '', component: BlogPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'posts/:id', component: PostPageComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService],
})
export class AppRoutingModule {}
