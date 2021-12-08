import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Post } from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {
  @Input() post!: Post;

  constructor() {}

  ngOnInit(): void {}

  likePost(): void {
    this.post.likes = this.post.likes !== undefined ? this.post.likes + 1 : 0;
  }
}
