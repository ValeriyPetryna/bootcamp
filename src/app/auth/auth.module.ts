import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { AuthService } from './services/auth.service';
import { SnackBarService } from '../shared/services/snack-bar.service';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [LoginPageComponent, RegistrationPageComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule],
  exports: [LoginPageComponent, RegistrationPageComponent],
  providers: [AuthService, SnackBarService],
})
export class AuthModule {}
