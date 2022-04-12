import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Comments } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }

  postComment(comment:Comments)
  {
    return this.http.post<any>(`http://localhost:3000/insert_feedback/feedback`,comment).pipe(
      map((comments)=>
      {
        return comments;
      })
    )
  }

  getComment():Observable<Comments[]>
  {
      return this.http.get<Comments[]>('http://localhost:3000/select_all_feedback/feedback');
  }
}
