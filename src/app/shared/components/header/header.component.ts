import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostFormComponent } from 'src/app/posts/components/post-form/post-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  title: string = 'My Blog';
  closeResult!: string;

  constructor(public modal: NgbModal) { }

  openDialog(): void {
    this.modal.open(PostFormComponent, { size: 'xl' });
  }
}
