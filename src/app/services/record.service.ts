import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PendingRecord, Record } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http:HttpClient) { }
  private apiUrl=environment.apiUrl;
 
  /*getRecord():Observable<Record[]>
  {
    return this.http.get<Record[]>('http://localhost/phpmyadmin/index.php?route=/table/structure&db=covid_compliance&table=record');
  }*/
  /* getofficerRecord(){
    return this.http.get<any>("${this.apiUrl}/get_all_records/record");
  } */
  
  getRecord():Observable<Record[]>
  {
    return this.http.get<Record[]>(`${this.apiUrl}/retrieve_entered_student/record`);
  }
  getPendingRecord():Observable<PendingRecord[]>
  {
    return this.http.get<PendingRecord[]>(`${this.apiUrl}/retrieve_all_form/record`);
  }
}
