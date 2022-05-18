import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate
{
  
  constructor(private adminservice:AdminService,private router:Router){}

  canActivate(): boolean
  {
    if(this.adminservice.isLoggedIn())
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
