import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs';
import { Images, PendingRecord, User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';
import { RecordService } from 'src/app/services/record.service';
import { UserService } from 'src/app/services/user.service';
import { StudentcardComponent } from '../studentcard/studentcard.component';

@Component({
  selector: 'app-viewpending',
  templateUrl: './viewpending.component.html',
  styleUrls: ['./viewpending.component.css']
})
export class ViewpendingComponent implements OnInit 
{

    users!: User[];
  
  pendingRecords!:PendingRecord[];


    @ViewChild(MatSidenav)
    
    sidenav!: MatSidenav;
  
   
    constructor(
      
      private recordservice:RecordService ,
      private userservice:UserService,
      private observer: BreakpointObserver,
      public dialog:MatDialog,
      private api:ApiService) {}

  ngOnInit(): void
   {
   
    this.onGetPending();
  }

<<<<<<< HEAD


 



=======
>>>>>>> Hamilton
  ngAfterViewInit()
  {
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
   

//officerid=sessionStorage.getItem('officer_id')
    onGetPending(): void 
    {
      this.recordservice.getPendingRecord().subscribe(
        (response:any) => {
          //console.log(response)
          //this.pendingRecords = response.data;
         //console.log("This is the info from server "+response.data);
         //console.log(this.pendingRecords);


        this.dataSourcePending = new MatTableDataSource(response.data);
        this.dataSourcePending.paginator = this.paginatorPending;
        this.dataSourcePending.sort = this.sortPending;

        },
        (error: any) => console.log('this is the error' + error),
        () => console.log('Done getting record'),
      );
    }








    //Access Pending

  displayedColumnPending: string[] = ['User_id', 'Form_check', 'Date', 'Tempareture', 'isAllowedEntrence','Status','Machine'];
    dataSourcePending !: MatTableDataSource<PendingRecord>;
    @ViewChild(MatPaginator) paginatorPending!: MatPaginator;
    @ViewChild(MatSort) sortPending !: MatSort;

  
    applyFilterPending(event: Event)
    {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourcePending.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSourcePending.paginator) {
        this.dataSourcePending.paginator.firstPage();
      }
    }


  getStudentCard = false;

  studentdetails(User_id)
  {
    {
      let dialogref = this.dialog.open(StudentcardComponent, {
        height: '800px',
        width: '50%',
        data:{User:User_id}
      });
      dialogref.afterClosed().subscribe(results => {
        console.log(`dialog results:'${results}`)
      }
      )
    }

    //this.getStudentCard=true;


   /*  this.userservice.getUser(`${User_id}`).subscribe(
      (response: any) => {
        if (response.message == 'Successful') {
          this.getStudentCard = true;
          //this.apimessage = "";
          console.log(response)
          this.users = response.data;
          console.log(this.users)
        }
        else if (response.message == 'Unsuccessful') {
          this.getStudentCard = false;
          //this.apimessage = "Please enter the correct student number";
        }
      },
      (error: any) => console.log('this is the error' + error),
      () => console.log('Done getting user'),
    ); */

  }
}
