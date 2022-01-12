import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  errors: any = {
    username: {
      required: 'Username field is required.',
      minlength: 'Username field should be at least 4 characters long.',
      maxlength: 'Username field should be less than 50 characters long.',
    },
    password: {
      required: 'Password field is required.',
      minlength: 'Password field should be at least 6 characters long.',
    },
  };

  constructor(private formBuilder: FormBuilder, private auth: AuthService, public snackBarService: SnackBarService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe({
        next: (res: unknown) => {
          console.log(res);
          this.snackBarService.openSnackBar(res);
        },
        error: (err: HttpErrorResponse) => {
          this.snackBarService.openSnackBar(err);
        },
      });
      this.loginForm.reset();
    } else {
      this.validateAllFormFields(this.loginForm);
    }
  }

  showValidationError(fieldName: string): string {
    if (!this.loginForm?.controls[fieldName].touched) {
      return '';
    }
    const error = Object.keys(this.errors[fieldName]).find((err) => this.loginForm.controls[fieldName].hasError(err));

    return error ? this.errors[fieldName][error] : '';
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
