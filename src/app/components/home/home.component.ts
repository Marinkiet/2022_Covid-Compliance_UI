import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { HealthFormComponent } from '../health-form/health-form.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  ngOnInit(): void {
  }

    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
  
    constructor(
      private router:Router,
      private observer: BreakpointObserver,
      private dialog: MatDialog) {}
    openDialog() {
      this.dialog.open(HealthFormComponent, {
        width: '30%'
      });
    }
    ngAfterViewInit() {
      //this.openDialog();   //open dialog imediatly when clicking qrcode and after clicking login button
      this.observer
        .observe(['(max-width: 800px)'])
        .pipe(delay(1))
        .subscribe((res) => {
          if (res.matches) {
            this.sidenav.mode = 'over';
            this.sidenav.close();
          } else {
            this.sidenav.mode = 'side';
            this.sidenav.open();
          }
        });
    }

    deletesession()
    {
      sessionStorage.removeItem('user_id');
      this.router.navigate(['/login']);
    }


}
