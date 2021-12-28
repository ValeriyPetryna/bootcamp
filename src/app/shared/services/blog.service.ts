import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/post.interface';

const basePostsURL: string = 'http://localhost:3000/api/posts';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public postStream = new BehaviorSubject<Post[]>([]);

  constructor (public http: HttpClient) {}

  public feedPosts(): BehaviorSubject<Post[]> {
    this.http.get<Post[]>(basePostsURL).subscribe(this.postStream);
    return this.postStream;
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(basePostsURL);
  }

  public getPostById(id: string | null): Observable<Post> {
    return this.http.get<Post>(`${basePostsURL}/${id}`);
  };

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(basePostsURL, post);
  }

  public updatePostById(id: string | null, post: Partial<Post>): Observable<Post> {
    return this.http.patch<Post>(`${basePostsURL}/${id}`, post);
  };

  public deletePostById(id: string | null): Observable<null> {
    return this.http.delete<null>(`${basePostsURL}/${id}`);
  };

  public getPostData(): Observable<Post[]> {
    return this.postStream.asObservable();
  }

  public updatePostData(post: Post): void {
    this.postStream.next([...this.postStream.getValue(), post]);
  }
}
