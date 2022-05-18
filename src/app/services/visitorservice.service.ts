import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { VisitorLogin } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class VisitorserviceService {

  constructor(private http:HttpClient) { }

  registerVisitor(data: any) {
    return this.http.post<any>("http://localhost:3000/add_visitor/visitor", data)
  }

  loginVisitor(visitor:VisitorLogin) {
    return this.http.post<VisitorLogin>(`http://localhost:3000/login_visitor/visitor`, {
      User_id: visitor.User_id, Password: visitor.Password
    }).pipe(
      map((Visitors) => 
      {
        //console.log(Officers);
       // this.setToken(Officers.User_id);
        //this.getLoggedInName.emit(true);
        //console.log('Following is Token');
        //console.log("User id is "+Users.User_id);
        //console.log(Users.User_id);
        //console.log(Users.Password);
        // localStorage.setItem('token',token.token);
        
        return Visitors;
      })
    )
    /* return this.http.post(`http://localhost:3000/login/user`,user); */
  }





}
