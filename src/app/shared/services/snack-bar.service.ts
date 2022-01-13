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

  public redirect() {
    return () => this.router.navigate(['']);
  }

  public openSnackBar(res: HttpErrorResponse | ServerResponse | any): void {
    let snack = this._snackBar.open(res.error?.message || res.message, 'Close', this.options);

    snack.afterDismissed().subscribe(this.redirect());
    snack.onAction().subscribe(this.redirect());
  }

  public successSnack(res: ServerResponse): void {
    let snack = this._snackBar.open(res.message, 'Close', this.options);

    snack.afterDismissed().subscribe(this.redirect());
    snack.onAction().subscribe(this.redirect());
  }

  public errorSnack(res: HttpErrorResponse): void {
    let snack = this._snackBar.open(res.error.message, 'Close', this.options);

    snack.afterDismissed().subscribe(this.redirect());
    snack.onAction().subscribe(this.redirect());
  }
}
