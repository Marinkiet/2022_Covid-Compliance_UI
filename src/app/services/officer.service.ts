import { Officer, OfficerLogin, UpdateOfficer } from './../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficerService {


  redirecturl!: string;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  //private apiUrl=environment.apiUrl;

  constructor(private http: HttpClient/*injection of the services*/) { }

  loginOfficer(user: OfficerLogin) {
    return this.http.post<OfficerLogin>(`http://localhost:3000/login_officer/officer`, {
      User_id: user.User_id, Password: user.Password
    }).pipe(
      map((Officers) => 
      {
        //console.log(Officers);
       // this.setToken(Officers.User_id);
        //this.getLoggedInName.emit(true);
        //console.log('Following is Token');
        //console.log("User id is "+Users.User_id);
        //console.log(Users.User_id);
        //console.log(Users.Password);
        // localStorage.setItem('token',token.token);
        return Officers;
      })
    )
    /* return this.http.post(`http://localhost:3000/login/user`,user); */
  }

  getOfficerProfile(id: string): Observable<Officer[]> {
    return this.http.get<Officer[]>("http://localhost:3000/retrieve_officer/user/"+ id)
  }


  updateofficerInfo(officerdata:UpdateOfficer,id: string):Observable<UpdateOfficer[] >
  {
      {
      return this.http.put<UpdateOfficer[]>("http://localhost:3000/update_officer/officer/:"+id,officerdata);
    }
  }

 /*  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  /*  getToken() {
     localStorage.getItem('token');
   } 
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    return !!localStorage.getItem('token');
  } */

  isLoggedIn()
  {
    return sessionStorage.getItem('officer_id')!=null;
  }

}
