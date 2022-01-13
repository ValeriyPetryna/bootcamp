import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/interfaces/post.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService {
  constructor(public http: HttpClient) {}
  // todo: add http headers
  public getPosts(tag: string = ''): Observable<Post[]> {
    const query: string = tag ? `?tag=${tag}` : '';

    return this.http.get<Post[]>(`${environment.apiURL}/posts${query}`);
  }

  public getPostById(id: string): Observable<Post> {
    return this.http.get<Post>(`${environment.apiURL}/posts/${id}`);
  }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.apiURL}/posts`, post);
  }

  public updatePostById(id: string, post: Partial<Post>): Observable<Post> {
    return this.http.patch<Post>(`${environment.apiURL}/posts/${id}`, post);
  }

  public deletePostById(id: string): Observable<unknown> {
    return this.http.delete<unknown>(`${environment.apiURL}/posts/${id}`);
  }

  public getTags(): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/tags`);
  }
}
