import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  clickEventsubscription !: Subscription;

  constructor(private router:Router,private api: ApiService) { }
  picSrc = "../../../assets/landingpage-images/vacc.jpg";
  ngOnInit(): void 
  {
    this.deletesession();
  }

  getImage(id: number): void {
    this.api.getImage(id)
      .subscribe({
        next: (res: any) => {
          console.log(res.data);
          //this.picSrc=res.data;   
          this.picSrc = res.data.map((obj: { pictureName: any; }) => obj.pictureName);
          //this.picSrc="../../../assets/landingpage-images/" + this.picName + ".jpg";

        }
      })
  }
  /* addImage(): void {
    this.api.postImage(this.picSrc).subscribe({
      next: (res: any) => {

      }
    })
  } */

  deletesession()
  {
    sessionStorage.removeItem('user_id')
    sessionStorage.removeItem('admin_id')
    sessionStorage.removeItem('officer_id')
  }

}
