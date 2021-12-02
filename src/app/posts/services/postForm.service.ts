import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostFormService {
  private postDataStream = new Subject<any>();
  constructor() { }

  public updatePostData(data: any): void {
    this.postDataStream.next(data);
  }

  public getPostData(): Observable<any> {
    return  this.postDataStream.asObservable();
 }
}
