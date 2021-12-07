import { Component } from '@angular/core';
import { PostFormComponent } from 'src/app/posts/components/post-form/post-form.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: string = 'My Blog';

  constructor(public modal: MatDialog) {}

  openDialog(): void {
    this.modal.open(PostFormComponent, {
      width: '500px',
      height: '500px',
    });
  }
}
