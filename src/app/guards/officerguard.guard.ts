import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OfficerService } from '../services/officer.service';

@Injectable({
  providedIn: 'root'
})
export class OfficerguardGuard implements CanActivate {
  
  constructor(private officerservice:OfficerService,private router:Router){}

  canActivate(): boolean
  {
    if(this.officerservice.isLoggedIn())
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
