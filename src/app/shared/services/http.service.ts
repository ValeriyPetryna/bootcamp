import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Comment } from 'src/app/shared/interfaces/post.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService {
  constructor(public http: HttpClient) {}
  // todo: add http headers
  public getPosts(tag = ''): Observable<Post[]> {
    const query: string = tag ? `?tag=${tag}` : '';

    return this.http.get<Post[]>(`${environment.apiURL}/posts${query}`);
  }

  public getUserPosts(userId = ''): Observable<Post[]> {
    const query: string = userId ? `?user=${userId}` : '';
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

  public likeToggle(body: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiURL}/likes`, body);
  }

  public getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiURL}/users/${id}`);
  }

  public addComment(body: any): Observable<Comment> {
    return this.http.post<Comment>(`${environment.apiURL}/comments`, body);
  }

  public removeComment(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.apiURL}/comments/${id}`);
  }

  public getLikedPosts(id = ''): Observable<any> {
    const query: string = id ? `?userId=${id}` : '';

    return this.http.get<any>(`${environment.apiURL}/likes${query}`);
  }

  public createTag(name = '', body: any): Observable<any> {
    return this.http.post<any>(`${environment.apiURL}/tags/${name}`, body);
  }

  public setTag(id = '', body: any): Observable<any> {
    return this.http.patch<any>(`${environment.apiURL}/tags/set/${id}`, body);
  }
}
