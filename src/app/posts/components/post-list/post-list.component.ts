import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../../shared/interfaces/post.interface';
import { PostFormService } from '../../services/post-form.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit, OnDestroy {
  postServiceSubscription!: Subscription;
  posts: Post[] = [
    {
      author: 'John Snow',
      title: 'Natural language interface accessibility',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quibusdam minus sapiente facere ab quae libero necessitatibus quod? Voluptas, neque.',
      date: new Date(),
      likes: 1,
    },
    {
      author: 'John Snow',
      title: 'Accessibility of Remote Meetings',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quibusdam minus sapiente facere ab quae libero necessitatibus quod? Voluptas, neque.',
      date: new Date(),
      likes: 2,
    },
  ];

  constructor(private postService: PostFormService) {}

  ngOnInit(): void {
    this.postServiceSubscribe();
  }

  ngOnDestroy(): void {
    this.postServiceSubscription.unsubscribe();
  }

  postServiceSubscribe() {
    this.postServiceSubscription = this.postService
      .getPostData()
      .subscribe((data: Post) => {
        data.date = new Date();

        this.posts.push(data);
      });
  }
}
