import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate,Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserguardGuard implements CanActivate 
{
  constructor(private userservice:UserService,private router:Router){}

  canActivate(): boolean
  {
    if(this.userservice.isLoggedIn())
    {
      return true;
    }
    else
    {
     // alert('session is empty')
      this.router.navigate(['login']);
      return false;
    }
   
  }

   
  
}
