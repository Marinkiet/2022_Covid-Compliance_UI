import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViewImage } from 'src/app/interfaces/file-to-upload';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  clickEventsubscription !: Subscription;

  constructor(private router: Router, private api: ApiService
    , private http: HttpClient) { }
  ngOnInit(): void {
    this.deletesession();
    this.onView();
  }
  images!: ViewImage[];
  thesrc!: string;
  thesrc1!: string;
  thesrc2!: string;
  thesrc3!: string;
  thesrc4!: string;
  onView() {
    this.http.get('http://localhost:3000/select_all_image/').subscribe(
      (res: any) => {
        this.images = res.data;
        this.thesrc = this.images[0].pic_path;
        this.thesrc1 = this.images[1].pic_path;
        this.thesrc2 = this.images[2].pic_path;
        this.thesrc3 = this.images[3].pic_path;
        this.thesrc4 = this.images[4].pic_path;

      }
    );
  }


  deletesession() {
    sessionStorage.removeItem('user_id')
    sessionStorage.removeItem('admin_id')
    sessionStorage.removeItem('officer_id')
  }

}