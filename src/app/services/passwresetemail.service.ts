import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passwreset } from '../interfaces/passwreset';
@Injectable({
  providedIn: 'root'
})
export class PasswresetemailService {

  constructor(private http:HttpClient) { }

  
  sentEmail(passwreset:Passwreset)
  {
    return this.http.post<Passwreset>('http://localhost:3000/send_reset_password/reset_email',passwreset)
  }
}