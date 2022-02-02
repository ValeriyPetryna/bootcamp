import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpService } from '../../services/http.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../../interfaces/post.interface';

import { AngularEditorConfig } from '@kolkov/angular-editor';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { config, validationInfo } from './config';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  public editorConfig: AngularEditorConfig = config;
  public errors: any = validationInfo;
  public postForm: FormGroup;
  public separatorKeysCodes: number[] = [ENTER, COMMA];
  public tagCtrl = new FormControl();
  public allTags: Array<any> = [];

  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(private blogService: BlogService, public modal: MatDialogRef<PostFormComponent>, private httpService: HttpService, @Inject(MAT_DIALOG_DATA) public postData: any) {
    this.postForm = new FormGroup({
      author: new FormControl(this.postData?.author || '', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      title: new FormControl(this.postData?.title || '', [Validators.required, Validators.minLength(5)]),
      content: new FormControl(this.postData?.content || '', [Validators.required, Validators.minLength(10)]),
    });
  }

  ngOnInit(): void {
    this.httpService.getTags().subscribe((tags) => {
      if (Object.keys(this.postData).length) {
        this.allTags = tags.filter((el: any) => {
          const ifExists = this.postData.tags.every((tag: any) => tag.name !== el.name);
          if (ifExists) {
            return el;
          }
        });
      } else {
        this.allTags = tags;
      }
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      if (Object.keys(this.postData).length) {
        // check that something was changed and send patch request
        const res = this.objectDeepDiff(this.postForm.value, this.postData);
        console.log(res);
      } else {
        this.httpService.createPost(this.postForm.value).subscribe((data) => this.blogService.updatePostData(data));
      }
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
    const error = Object.keys(this.errors[fieldName]).find((err) => this.postForm.controls[fieldName].hasError(err));

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

  objectDeepDiff(data: object | any, oldData: object | any): Partial<Post> {
    const record: any = {};
    Object.keys(data).forEach((key: string) => {
      if (data[key] !== oldData[key]) {
        record[key] = data[key];
      }
    });
    return record;
  }

  public addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.httpService.createTag(event.value, { name: event.value }).subscribe({
        next: (res: any) => this.tagToggle(res._id),
      });
    }

    event.chipInput?.clear();
    this.tagCtrl.setValue(null);
  }

  public selectedTag(event: MatAutocompleteSelectedEvent): void {
    const selected = this.allTags.find((el: { name: string }) => el.name === event.option.viewValue);

    this.tagToggle(selected._id); // push tag to post

    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  public tagToggle(tag: any): void {
    this.httpService.setTag(tag, { postId: this.postData._id, tagId: tag }).subscribe({
      next: (res: any) => {
        this.postData.tags = res.tags;
      },
    });
  }
}
