import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postOfficer(data : any){
    return this.http.post<any>("http://localhost:3000/officers/",data);
  }

  getOfficer(){
    return this.http.get<any>("http://localhost:3000/officers/");
  }
}
