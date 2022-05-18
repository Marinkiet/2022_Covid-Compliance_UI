import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flueData, statsData, visitorData } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http:HttpClient) { }

  getStats():Observable<statsData[]>
  {
    return this.http.get<statsData[]>('http://localhost:3000/States/states/');
  }
  getFlue():Observable<flueData[]>
  {
    return this.http.get<flueData[]>('http://localhost:3000/flue/flue');
  }

  getVisitor():Observable<visitorData[]>
  {
    return this.http.get<visitorData[]>('http://localhost:3000/retrieve_all_vistors/retrieve_all_vistors');
  }


}