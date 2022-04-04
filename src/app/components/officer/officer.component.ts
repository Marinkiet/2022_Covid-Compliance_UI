import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { StudentcardComponent } from '../studentcard/studentcard.component';
import { UserService } from 'src/app/services/user.service';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { User,Record } from 'src/app/interfaces/user';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {
  temp2:number=0.0;
  messg="";
  temp = 37.0;
  isScan=false;

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
    this.onGetRecord();
    this.onGetPending();

  }
  users!: User[];
  records!:Record[];
  pendingRecords!:Record[];

    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;
  
   
    constructor(
      private recordservice:RecordService ,
      private userservice:UserService,
      private observer: BreakpointObserver,
      public dialog:MatDialog,
      private api:ApiService) {}

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
    onGetUser(): void
    {
      this.userservice.getUser(`${218179088}`).subscribe(
        (response: any) => {
          console.log(response)
          this.users = response.data;
          console.log(this.users)
        },
        (error: any) => console.log('this is the error' + error),
        () => console.log('Done getting user'),
      );
    } 
    public showstudentcard:boolean=false;
    public btnScan:any='show';


    openDialog()
    {
      let dialogref=this.dialog.open(StudentcardComponent,{height: '800px',
      width: '50%',});
      dialogref.afterClosed().subscribe(results=>
        {
          console.log(`dialog results:'${results}`)
        })


        
    }

    scanUser()
    {
      this.showstudentcard=!this.showstudentcard;
    }
    showUser()
    {
      if(this.showstudentcard)
      {
        this.btnScan='hide';
      }
      else
      {
        this.btnScan='show';
      }
    }

    onGetRecord(): void 
    {
      this.recordservice.getRecord().subscribe(
        (response: any) => {
          //console.log(response)
          this.records = response.data;
         console.log(response.data);
         // console.log(this.users)
        },
        (error: any) => console.log('this is the error' + error),
        () => console.log('Done getting officer'),
      );
    }

    onGetPending(): void 
    {
      this.recordservice.getPendingRecord().subscribe(
        (response:any) => {
          //console.log(response)
          this.pendingRecords = response.data;
         //console.log(response.data);
         //console.log(this.pendingRecords);
        },
        (error: any) => console.log('this is the error' + error),
        () => console.log('Done getting officer'),
      );
    }

}