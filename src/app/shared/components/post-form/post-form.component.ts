import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PostFormService } from '../../../blog/services/post-form.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent {
  postForm: FormGroup;
  errors: any = {
    author: {
      required: 'Article author field is required.',
      minlength: 'Article author field should be at least 4 characters long.',
      maxlength: 'Article author field should be less than 50 characters long.',
    },
    title: {
      required: 'Article title field is required.',
      minlength: 'Article title field should be at least 5 characters long.',
    },
    content: {
      required: 'Article content field is required.',
      minlength: 'Article content field should be at least 10 characters long.',
    },
  };

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

  showValidationError(fieldName: string): string {
    if (!this.postForm?.controls[fieldName].touched) {
      return '';
    }
    const error = Object.keys(this.errors[fieldName]).find((err) =>
      this.postForm.controls[fieldName].hasError(err)
    );

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
