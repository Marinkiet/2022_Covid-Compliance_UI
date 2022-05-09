import { Component, OnInit } from '@angular/core';
import { RecordService } from 'src/app/services/record.service';
import { ApiService } from 'src/app/services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { User,Record } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-officer-records',
  templateUrl: './officer-records.component.html',
  styleUrls: ['./officer-records.component.css']
})
export class OfficerRecordsComponent implements OnInit {
  displayedColumns: string[] = ['Record_id','Officer_id', 'User_id', 'Form_check', 'Date','Tempareture','isAllowedEntrence','Status'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor( 
    private observer: BreakpointObserver,
    private recordservice:RecordService ,
    private userservice:UserService,
    private api:RecordService,
    private api2:ApiService,
    private router:Router
    ) { }

    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;

    users!: User[];
    records!:Record[];
    pendingRecords!:Record[];
   
  
  ngOnInit(): void {
    this.onGetRecord();
  }
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
  

  public showstudentcard:boolean=false;
  public btnScan:any='show';

/*   
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
  } */
  onGetRecord()
    {
      this.api2.getRecord()
      .subscribe({
        next:(res:any)=> {
        
          this.dataSource = new MatTableDataSource(res.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          
         //console.log(response.data);
         // console.log(this.users)
        },
        error:()=>{
          alert("Error while fetching record data");
        }
      })
    }
    /*getAllOfficers(){
      this.api.getOfficer()
      .subscribe({
        next:(res)=>{
          //console.log(res)
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error:()=>{
          alert("Error while fetching officer data");
        }
      })
    }*/

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




  deletesession() {
    sessionStorage.removeItem('officer_id')
    this.router.navigate(['/login']);
  }
}
