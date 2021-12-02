import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostFormService } from '../../services/postForm.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class PostFormComponent{
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // public modalService: NgbModal,
    // private postFormService: PostFormService
  ) {
      this.postForm = this.formBuilder.group({
        author: ['', [Validators.required, Validators.minLength(4)]],
        title: ['', []],
        content: ['', []]
        // date: [new Date(), [Validators.required, Validators.minLength(10)]],
      })
   }

  onSubmit() {
    // if(this.postForm.invalid) return;
    console.log(this.postForm.value);
  // this.postFormService.updatePostData(this.formGroup.value);
  }
}
