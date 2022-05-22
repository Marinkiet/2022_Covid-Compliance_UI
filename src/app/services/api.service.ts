import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map, Observable } from 'rxjs';
//import { FileToUpload } from '../interfaces/file-to-upload';
import { addImage, GetAllOfficers, GetAllRecords, getImage, getTheUser, Officer, UpdatePassword, updatetheUser, User } from '../interfaces/user';

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

  postImage(fileToUpload:File): Observable<boolean>
  {
    const formData: FormData = new FormData();

    formData.append('image',fileToUpload, fileToUpload.name);
    return this.http.post<any>("http://localhost:3000/upload_image/image",formData);
  
  }
 
  updateUser(User_id: number): Observable<updatetheUser[]> {
    return this.http.put<updatetheUser[]>("http://localhost:3000/update/user/", User_id);
  }
  getUser(id: string): Observable<getTheUser[]> {
    return this.http.get<getTheUser[]>("http://localhost:3000/view_user/user/"+id)
  }
   requestReset(body): Observable<any> {
    return this.http.post("http://localhost:3000/api/resetpassword/req-reset-password", body);
  }

  newPassword(body): Observable<any> {
    return this.http.post("http://localhost:3000/api/resetpassword/new-password", body);
  }

  ValidPasswordToken(body): Observable<any> {
    return this.http.post("http://localhost:3000/api/resetpassword/valid-password-token", body);
  }

  updatePassword(userEmail:string):Observable<UpdatePassword>{
    return this.http.put<UpdatePassword>("http://localhost:3000/reset_password/:email",userEmail);
  }
  getoldUser(username:string):Observable<User>
  {
    return this.http.get<User>(`http://localhost:3000/view_user/user/${username}`)
  }

}
