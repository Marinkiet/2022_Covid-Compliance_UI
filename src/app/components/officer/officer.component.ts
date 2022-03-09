import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {
  temp2:number=0.0;
  messg="";
  temp = 37.0;
  validateTemp(temp2:number){
    if (temp2 >=36.1 && temp2 <=37.2) {
      this.messg="Allow access";
    }else if(temp2 > 37.2){
      this.messg ="Deny access,Temperature too high";
    }else{
      this.messg ="Deny access,Temperature too low";
    }
  }
  ngOnInit(): void {
  }

    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
  
    constructor(
      private observer: BreakpointObserver,
   ) {}
    ngAfterViewInit() {
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

}