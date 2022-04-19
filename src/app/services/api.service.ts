import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { addImage, GetAllOfficers, GetAllRecords, getImage, getTheUser, Officer, updatetheUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  constructor(private http:HttpClient) { }

 /* postOfficer(data : Officer){
    return this.http.post<any>("http://localhost:3000/create_officer/officer",{Officer_id:data.Officer_id,
    Last_name:data.Last_name,First_name:data.First_name,Campus_id:data.Campus_id,Email:data.Email,Password:data.Password,Cellphone_number:data.Campus_id,Gender:data.Gender}).pipe(
      map((Officers)=>{
        return Officers}));
  }*/

  postOfficer(data : any){
    return this.http.post<any>("http://localhost:3000/create_officer/officer",data)
  }

  getOfficer():Observable<GetAllOfficers[]>{
    return this.http.get<GetAllOfficers[]>("http://localhost:3000/retrieve_all_officers/officer");
  }
  putOfficer(officer_id:number):Observable<GetAllOfficers[]>{
    return this.http.put<GetAllOfficers[]>("http://localhost:3000/update_officer/officer/:Officer_id",officer_id);
  }
  deleteOfficer(id:number):Observable<GetAllOfficers[]>{
    return this.http.delete<GetAllOfficers[]>("http://localhost:3000/delete_officer/officer/"+id);
  }

  getRecord():Observable<GetAllRecords[]>{
    return this.http.get<GetAllRecords[]>("http://localhost:3000/get_all_records/record")
  }



//Marinkie Changes
  getImage(id: number): Observable<getImage> {
    return this.http.get<getImage>("http://localhost:3000/select_image/image/" + id);
  }

  postImage(data: any): Observable<addImage> {
    return this.http.post<addImage>("http://localhost:3000/upload_image/image", data);
  }
  updateUser(User_id: number): Observable<updatetheUser[]> {
    return this.http.put<updatetheUser[]>("http://localhost:3000/update/user/", User_id);
  }
  getUser(id: string): Observable<getTheUser[]> {
    return this.http.get<getTheUser[]>("http://localhost:3000/view_user/user/"+id)
  }
  
}
