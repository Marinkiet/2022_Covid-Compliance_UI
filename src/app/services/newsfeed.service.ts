import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Newsfeed } from '../interfaces/newsfeed';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  constructor(private http:HttpClient) { }


  sentNewsFeed(newsfeed:Newsfeed)
  {
    return this.http.post<Newsfeed>(`http://localhost:3000/insert_news/newsfeed`,newsfeed).pipe(
      map((comments)=>
      {
        console.log(comments);
        return comments;
      })
    )
  }
  getNewsFeed():Observable<Newsfeed>
  {
    return this.http.get<Newsfeed>(`http://localhost:3000/select_news_feed/newsfeed`).pipe(
      map((comments)=>
      {
        console.log(comments);
        return comments;
      })
    )
  }

  deleteNewsFeed(id:number):Observable<Newsfeed[]>{
    return this.http.delete<Newsfeed[]>("http://localhost:3000/delete_news/delete_news_feed/"+id);
  }

}
