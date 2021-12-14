import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/post.interface';

const posts: Post[] = [
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

@Injectable({
  providedIn: 'root',
})
export class PostFormService {
  private postStream = new BehaviorSubject<Post[]>(posts);

  public getPostData(): Observable<Post[]> {
    return this.postStream.asObservable();
  }

  public updatePostData(post: Post): void {
    this.postStream.next([...this.postStream.getValue(), this.setProps(post)]);
  }

  public setProps(obj: Post): Post {
    return Object.assign(obj, { date: new Date(), likes: 0 });
  }
}
