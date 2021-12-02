import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostFormComponent } from 'src/app/posts/components/post-form/post-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  title = 'My Blog';
  closeResult!: string;

  constructor(
    public modal: NgbModal
  ) { 
  }
  openDialog(): void {
    this.modal.open(PostFormComponent, { size: 'xl' });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }  
}
