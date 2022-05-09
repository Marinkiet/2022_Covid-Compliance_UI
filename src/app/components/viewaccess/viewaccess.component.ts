import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs';
import { User,Record, PendingRecord } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';
import { RecordService } from 'src/app/services/record.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewaccess',
  templateUrl: './viewaccess.component.html',
  styleUrls: ['./viewaccess.component.css']
})
export class ViewaccessComponent implements OnInit {

  temp2:number=0.0;
  messg="";
  temp = 37.0;
  isScan=false;

    users!: User[];
    //images!:Images[];
  records!:Record[];
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
    this.onGetRecord();
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
 

    

    onGetRecord(): void 
    {
      this.recordservice.getRecord().subscribe(
        (response: any) => {
          //console.log(response)
         // this.records = response.data;
         //console.log(response.data);
         // console.log(this.users)

         this.dataSource = new MatTableDataSource(response.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
          //this.pendingRecords = response.data;
         //console.log("This is the info from server "+response.data);
         //console.log(this.pendingRecords);


        this.dataSourcePending = new MatTableDataSource(response.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        },
        (error: any) => console.log('this is the error' + error),
        () => console.log('Done getting record'),
      );
    }






    //table data

    displayedColumns: string[] = ['Officer_id', 'User_id', 'Form_check', 'Date','Tempareture','isAllowedEntrence','Status'];
    dataSource !: MatTableDataSource<Record>;
    @ViewChild(MatPaginator) paginator !: MatPaginator;
    @ViewChild(MatSort) sort !: MatSort;
    applyFilter(event: Event)
    {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }


    //Access Pending

    displayedColumnPending: string[] = ['Officer_id', 'User_id', 'Form_check', 'Date','Tempareture','isAllowedEntrence','Health_status_reason'];
    dataSourcePending !: MatTableDataSource<PendingRecord>;
    //@ViewChild(MatPaginator) paginatorPending!: MatPaginator;
    //@ViewChild(MatSort) sortPending !: MatSort;

    @ViewChild('paginatorPending')
  paginatorPending!: MatPaginator;
    applyFilterPending(event: Event)
    {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSourcePending.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSourcePending.paginator) {
        this.dataSourcePending.paginator.firstPage();
      }
    }



}
