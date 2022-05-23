
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormData} from '../interfaces/user';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class HealthformService {

  constructor(private http:HttpClient) {}
  private apiUrl=environment.apiUrl;

    form(data:FormData)
    {
      return this.http.post<FormData>(`${this.apiUrl}/insert_healthform/user`,data)
    }  
}

