import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOfficerComponent } from 'src/app/components/add-officer/add-officer.component';
import { ApiService } from 'src/app/services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
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
    private api:ApiService) { }

  ngOnInit(): void {
    this.getAllOfficers();
  }
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

