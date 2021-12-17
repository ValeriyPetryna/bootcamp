import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/post.interface';

const basePostsURL = 'http://localhost:3000/api/posts';
@Injectable({
  providedIn: 'root',
})
export class PostFormService {
  private postStream = new BehaviorSubject<Post[]>([]);

  constructor (private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(basePostsURL);
  }

  public sendPost(post: Post): Observable<Post> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(post);
    return this.http.post<Post>(basePostsURL, body, {'headers': headers});
  }
  // method => return Observable
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
