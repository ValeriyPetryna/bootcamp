import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { SnackBarService } from '../shared/services/snack-bar.service';

@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatIconModule, ReactiveFormsModule],
  exports: [LoginPageComponent, RegistrationPageComponent],
  providers: [AuthService, SnackBarService],
})
export class AuthModule {}
