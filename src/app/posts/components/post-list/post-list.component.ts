import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  posts: Post[] = [
    {
      author: 'John Snow',
      title: 'Natural language interface accessibility',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quibusdam minus sapiente facere ab quae libero necessitatibus quod? Voluptas, neque.',
      date: new Date(),
    },
    {
      author: 'John Snow',
      title: 'Accessibility of Remote Meetings',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quibusdam minus sapiente facere ab quae libero necessitatibus quod? Voluptas, neque.',
      date: new Date(),
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.posts)
  }

}
