import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contactus } from '../interfaces/contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }
  private apiUrl=environment.apiUrl;
  
  sentEmail(contactus:Contactus)
  {
    return this.http.post<Contactus>(`${this.apiUrl}/send_email/send`,contactus).pipe(
      map((comments)=>
      {
        console.log(comments);
        return comments;
      })
    )
  }
}
