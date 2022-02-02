import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPageComponent } from './registration-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

describe('RegistrationPageComponent', () => {
  let component: RegistrationPageComponent;
  let fixture: ComponentFixture<RegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, MatSnackBarModule],
      declarations: [ RegistrationPageComponent ],
      providers: [
        SnackBarService,
        {
          provide: AuthService,
          useValue: {
            signUp: () => {
              return '';
            },
          },
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should require valid email and password length', () => {
    component.signUpForm.setValue({
      username: 'in',
      email: 'invalid-email',
      password: '22',
    });
    expect(component.signUpForm.valid).toEqual(false);
  });
});
