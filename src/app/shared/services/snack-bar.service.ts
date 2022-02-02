import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { ServerResponse } from '../interfaces/response.interface';

@Injectable()
export class SnackBarService {
  options: object = {
    duration: 3000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  };

  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  public redirect(link = '') {
    return () => this.router.navigate([link]);
  }

  public openSnackBar(res: HttpErrorResponse | ServerResponse): void {
    const snack = this._snackBar.open(res.error?.message || res.message || 'Success!', 'Close', this.options);

    snack.afterDismissed().subscribe(this.redirect());
    snack.onAction().subscribe(this.redirect());
  }

  public successSnack(res: ServerResponse): void {
    const snack = this._snackBar.open(res.message, 'Close', this.options);

    snack.afterDismissed().subscribe(this.redirect());
    snack.onAction().subscribe(this.redirect());
  }

  public errorSnack(res: string, redirectOptions: any): void {
    const snack = this._snackBar.open(res, 'Close', this.options);

    if(redirectOptions?.redirect) {
      snack.afterDismissed().subscribe(this.redirect(redirectOptions.url));
      snack.onAction().subscribe(this.redirect(redirectOptions.url));
    }
  }
}
