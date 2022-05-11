import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Contactus } from '../interfaces/contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }

  
  sentEmail(contactus:Contactus)
  {
    return this.http.post<Contactus>(`http://localhost:3000/send_email/send`,contactus).pipe(
      map((comments)=>
      {
        console.log(comments);
        return comments;
      })
    )
  }
}
