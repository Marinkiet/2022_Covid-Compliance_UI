import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  private apiUrl=environment.apiUrl;
  
  postComment(comment:Comments)
  {
    return this.http.post<Comments>(`${this.apiUrl}/insert_feedback/feedback`,comment).pipe(
      map((comments)=>
      {
        return comments;
      })
    )
  }

  getComment():Observable<Comments[]>
  {
      return this.http.get<Comments[]>(`${this.apiUrl}/select_all_feedback/feedback`);
  }
}
