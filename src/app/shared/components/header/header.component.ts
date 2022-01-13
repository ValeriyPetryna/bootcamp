import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PostFormComponent } from 'src/app/shared/components/post-form/post-form.component';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = 'My Blog';
  modalOptions: object = {
    width: '500px',
    height: '500px',
  };

  constructor(public modal: MatDialog, public blogService: BlogService, private router: Router) {}

  public openDialog(): void {
    this.modal.open(PostFormComponent, this.modalOptions);
  }

  public refreshData(): void {
    if (this.router.url.match(/tag/i)) {
      this.blogService.feedPosts();
    }
  }
}
