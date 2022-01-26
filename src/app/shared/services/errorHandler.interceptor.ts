import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackBarService } from './snack-bar.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private snack: SnackBarService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.status === 400 || error.status === 404) {
          console.log('this is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('this is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.error.message}`;
        }

        this.snack.errorSnack(errorMsg);
        return throwError(() => errorMsg);
      })
    );
  }
}
