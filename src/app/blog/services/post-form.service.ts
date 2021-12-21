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

  constructor (public http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(basePostsURL);
  }

  public sendPost(post: any): any {
    this.http.post<any>(basePostsURL, post).subscribe(res => console.log(res));
    // return this.http.post<any>(basePostsURL, post);
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
