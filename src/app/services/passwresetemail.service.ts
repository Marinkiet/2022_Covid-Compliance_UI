import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passwreset } from '../interfaces/passwreset';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PasswresetemailService {

  constructor(private http:HttpClient) { }
  private apiUrl=environment.apiUrl;
  
  sentEmail(passwreset:Passwreset)
  {
    return this.http.post<Passwreset>(`${this.apiUrl}/send_reset_password/reset_email`,passwreset)
  }
}