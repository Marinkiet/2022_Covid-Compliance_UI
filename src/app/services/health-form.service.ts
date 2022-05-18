
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormData} from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class HealthformService {

  constructor(private http:HttpClient) {}


    form(data:FormData)
    {
      return this.http.post<FormData>("http://localhost:3000/insert_healthform/user",data)
    }  
}

