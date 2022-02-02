import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SnackBarService } from './snack-bar.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private snack: SnackBarService, private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';

        const redirectOptions = {
          redirect: false,
          url: ''
        };

        if (error.status === 400 || error.status === 404) {
          console.log('this is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('this is server side error');
          errorMsg = `Error Code: ${error.status || error.name},  Message: ${error.error.message || error.message}`;
        }

        if(errorMsg.match(/expired/i)) {
          redirectOptions.redirect = true;
          redirectOptions.url = 'login';

          this.auth.logout();
        }

        this.snack.errorSnack(errorMsg, redirectOptions);
        return throwError(() => errorMsg);
      })
    );
  }
}
