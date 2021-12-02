import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostFormService } from '../../services/post-form.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})

export class PostFormComponent{
  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostFormService) {
      this.postForm = this.formBuilder.group({
        author: ['', [Validators.required, Validators.minLength(4)]],
        title: ['', [Validators.required, Validators.minLength(10)]],
        content: ['', []]
      })
   }

  onSubmit() {
    if(this.postForm.status === 'VALID') {
      this.postService.updatePostData(this.postForm.value);
    } else {
      this.validateAllFormFields(this.postForm)
    }
  }

  showValidationError(fieldName: string, error = 'required'): boolean {
    return this.postForm && this.postForm.controls[fieldName].touched && this.postForm.controls[fieldName].hasError(error);
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
