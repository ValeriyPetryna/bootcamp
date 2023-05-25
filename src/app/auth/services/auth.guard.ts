import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  isUserLogged!: boolean;
  loginSub!: Subscription;

  constructor(public auth: AuthService, public router: Router) {}
  canActivate(): boolean {
    this.loginSub = this.auth.isLoggedIn().subscribe(data => this.isUserLogged = data);
    if (!this.isUserLogged) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
