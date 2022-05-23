import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flueData, statsData, visitorData } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http:HttpClient) { }

  private apiUrl=environment.apiUrl;
  
  getStats():Observable<statsData[]>
  {
    return this.http.get<statsData[]>(`${this.apiUrl}/States/states/`);
  }
  getFlue():Observable<flueData[]>
  {
    return this.http.get<flueData[]>(`${this.apiUrl}/flue/flue`);
  }

  getVisitor():Observable<visitorData[]>
  {
    return this.http.get<visitorData[]>(`${this.apiUrl}/retrieve_all_vistors/retrieve_all_vistors`);
  }


}