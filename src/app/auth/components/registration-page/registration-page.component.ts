import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  hide: boolean = false;
  signUpForm: FormGroup;
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
    email: {
      required: 'Email field is required.',
      minlength: 'Email field should be at least 6 characters long.',
    },
  };

  constructor(private formBuilder: FormBuilder, private auth: AuthService, public snackBarService: SnackBarService) {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.auth.signUp(this.signUpForm.value).subscribe({
        next: (res: any) => {
          this.snackBarService.openSnackBar(res);
        },
        // error: (err: HttpErrorResponse) => {
        //   this.snackBarService.openSnackBar(err);
        // },
      });
      this.signUpForm.reset();
    } else {
      this.validateAllFormFields(this.signUpForm);
    }
  }

  showValidationError(fieldName: string): string {
    if (!this.signUpForm?.controls[fieldName].touched) {
      return '';
    }
    const error = Object.keys(this.errors[fieldName]).find((err) => this.signUpForm.controls[fieldName].hasError(err));

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
