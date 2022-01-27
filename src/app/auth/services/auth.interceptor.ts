import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken: string | null = this.auth.getToken;
    if (authToken) {
      req = req.clone({
        setHeaders: {
          'x-access-token': authToken,
        },
      });
    }

    return next.handle(req);
  }
}
