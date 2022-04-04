import { UpdateRecord, UserLogin } from './../interfaces/user';
import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable,observable} from 'rxjs';
//import { userlogin} from '../interfaces/user';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
//import { EventEmitter } from 'stream';



/* export interface Userlogin
{
  userId:string;
  password:string;
} */

export interface userregister
{
  firstNames:string;
  lastName:string;
  username:string;
  password:string;
  cellphone:string;
  campId:string;
  email:string;
  token:string;
}
@Injectable({
  providedIn: 'root'
})


export class UserService
{
  
  redirecturl!:string;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  //private apiUrl=environment.apiUrl;

  constructor(private http:HttpClient/*injection of the services*/){ }

  loginUser(user:UserLogin)
  {
    return this.http.post<UserLogin>(`http://localhost:3000/login/user`, {
      User_id: user.User_id, Password: user.Password
    }).pipe(
          map((Users)=>
          {
            console.log(Users);

            this.setToken(Users.User_id);
            this.getLoggedInName.emit(true);
            //console.log('Following is Token');
            //console.log("User id is "+Users.User_id);
            //console.log(Users.User_id);
            //console.log(Users.Password);
            
            
           // localStorage.setItem('token',token.token);
            return Users;
          })
        ) 
    /* return this.http.post(`http://localhost:3000/login/user`,user); */
  }
  setToken(token: string)
  {
    localStorage.setItem('token',token);
  }
 /*  getToken() {
    localStorage.getItem('token');
  } */
  deleteToken() {
    localStorage.removeItem('token');
  }



  isLoggedIn()
  {
    return !!localStorage.getItem('token');
  }



  registerUser(user:userregister)
  {
    return this.http.post<any>(`http://localhost:3000/add_user/user`,{firstNames:user.firstNames,lastName:user.lastName ,username:user.username,password:user.password,cellphone:user.cellphone,email:user.email,campId:user.campId}).pipe(
      map((token)=>
      {
        console.log('token');
        localStorage.setItem('token',token.access_token);
        return token;
      })
    )
  }



  
/*   getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(`http://localhost:3000/viewall`)
  }
  */
  getUser(username:string):Observable<User>
  {
    return this.http.get<User>(`http://localhost:3000/view_user/user/${username}`)
  }
 

  updateRecord(officer:UpdateRecord,Record_id:number)
  {
    return this.http.put<any>(`http://localhost:3000/updateRecord/record/${Record_id}`,officer).pipe(
      map((record)=>
      {
        console.log(record);
       // console.log("This is the temperature "+officer.Tempareture);
       
       //console.log("This is the temperature "+officer.Record_id);
        return record;
      })
    )
  }





  
/*  
  getUsers():Observable<User[]>
  {
    return this.http.get<User[]>(`${this.apiUrl}/viewall`);
  }
  getUser():Observable<User> //getting only one user
  {
    return this.http.get<User>(`${this.apiUrl}/view_user/user/0000`);
  }
 */

/*   registerUser(user:any)
  {
    return this.http.post<any>(`${this.apiUrl}/add_user/user`,user);
  }

  postOfficer(data : any){
    return this.http.post<any>("http://localhost:3000/officers/",data);
  } */


}


  