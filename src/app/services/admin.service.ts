import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs';
import { AdminLogin } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  redirecturl!: string;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  //private apiUrl=environment.apiUrl;

  constructor(private http: HttpClient/*injection of the services*/) { }

  loginAdmin(user: AdminLogin) {
    return this.http.post<AdminLogin>(`http://localhost:3000/login_admin/admin`, {
      User_id: user.User_id, Password: user.Password
    }).pipe(
      map((Admins) => {
        console.log(Admins);

        //this.setToken(Admins.User_id);
        this.getLoggedInName.emit(true);
        //console.log('Following is Token');
        //console.log("User id is "+Users.User_id);
        //console.log(Users.User_id);
        //console.log(Users.Password);


        // localStorage.setItem('token',token.token);
        return Admins;
      })
    )
    /* return this.http.post(`http://localhost:3000/login/user`,user); */
  }
/*   setToken(token: string) {
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
    return sessionStorage.getItem('admin_id')!=null;
  }


}
