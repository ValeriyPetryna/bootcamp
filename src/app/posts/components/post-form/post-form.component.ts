import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PostFormService } from '../../services/post-form.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})

export class PostFormComponent {
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostFormService,
    public modal: MatDialogRef<PostFormComponent>
  ) {
    this.postForm = this.formBuilder.group({
      author: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postService.updatePostData(this.postForm.value);
      this.postForm.reset();
      this.modal.close();
    } else {
      this.validateAllFormFields(this.postForm);
    }
  }

  showValidationError(fieldName: string, error = 'required'): boolean {
    return (
      this.postForm &&
      this.postForm.controls[fieldName].touched &&
      this.postForm.controls[fieldName].hasError(error)
    );
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
