import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,ActivatedRoute, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { VisitorserviceService } from '../services/visitorservice.service';

@Injectable({
  providedIn: 'root'
})
export class VisitorGuard implements CanActivate
{
  isVisitor: any;
  constructor(private visitorservice:VisitorserviceService,private router:Router,
    private activatedrouter:ActivatedRoute){}

 

  canActivate(): boolean
  {
    if(this.visitorservice.isLoggedIn())
    {
      //this.getParams();
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
