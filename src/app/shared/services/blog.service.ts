import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { HttpService } from './http.service';

@Injectable()
export class BlogService {
  public postStream = new BehaviorSubject<Post[]>([]);

  constructor(public httpService: HttpService) {}

  public feedPosts(tag = ''): void {
    this.httpService.getPosts(tag).subscribe((posts) => this.postStream.next(posts));
  }

  public getPostData(): Observable<Post[]> {
    return this.postStream.asObservable();
  }

  public updatePostData(post: Post): void {
    this.postStream.next([post, ...this.postStream.getValue()]);
  }

  public filterPostData(id: string): void {
    this.postStream.next(this.postStream.getValue().filter((item) => item._id !== id));
  }
}
