import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOfficerComponent } from 'src/app/components/add-officer/add-officer.component';
import { ApiService } from 'src/app/services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['officer_id', 'officer_firstName', 'officer_lastName', 'officer_emailAddress','officer_phoneNumber','officer_gender','officer_oldPassword','officer_newPassword','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor( 
    private dialog: MatDialog,
    private api:ApiService,
    private observer: BreakpointObserver) { }

  ngOnInit(): void {
    this.getAllOfficers();
  }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  openDialog() {
    this.dialog.open(AddOfficerComponent, {
      width: '30%'
      //if the value is saved refresh page auto
    }).afterClosed().subscribe(val=>{
      if(val === 'saved'){
        this.getAllOfficers();
      }
    });
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
  
  getAllOfficers(){
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
  }
  editOfficer(row:any){
    this.dialog.open(AddOfficerComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'Updated'){
        this.getAllOfficers();
      }
  })
}
deleteOfficer(id:number){
this.api.deleteOfficer(id)
.subscribe({
  next:(res)=>{
   // alert('Officer Deleted');
    this.getAllOfficers();
  },error:()=>{
    alert('Could not delete Officer');
  }
})
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

