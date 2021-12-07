import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Post } from '../../shared/interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostFormService {
  private postDataStream = new Subject<Post>();
  constructor() {}

  public updatePostData(data: Post): void {
    this.postDataStream.next(data);
  }

  public getPostData(): Observable<Post> {
    return this.postDataStream.asObservable();
  }
}
