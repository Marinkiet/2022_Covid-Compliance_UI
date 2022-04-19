import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs';
import { PendingRecord, User } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';
import { RecordService } from 'src/app/services/record.service';
import { UserService } from 'src/app/services/user.service';

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

    displayedColumnPending: string[] = ['Officer_id', 'User_id', 'Form_check', 'Date','Tempareture','isAllowedEntrence','Health_status_reason'];
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


}
