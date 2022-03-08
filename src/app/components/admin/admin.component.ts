import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOfficerComponent } from 'src/app/components/add-officer/add-officer.component';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor( 
    private dialog: MatDialog,
    private api:ApiService) { }

  ngOnInit(): void {
    this.getAllOfficers();
  }
  openDialog() {
    this.dialog.open(AddOfficerComponent, {
      width: '30%'
    });

  }
  getAllOfficers(){
    this.api.getOfficer()
    .subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        alert("Error while fetching officer data");
      }
    })
  }
}
