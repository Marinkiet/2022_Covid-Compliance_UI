import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { ReportItemComponent } from './report-item/report-item.component';
import * as html2pdf from 'html2pdf.js';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
  displayedColumns: string[] = ['officer_id', 'user_id', 'user_type', 'form_id','date','temperature','comments','action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor( private router:Router,
    private dialog: MatDialog,
    private api:ApiService,
    private observer: BreakpointObserver,
    public datepipe: DatePipe,
    ) { }

    ngOnInit(): void {
      this.getRecords();
    }
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav;

    openDialog() {
      this.dialog.open(ReportItemComponent, {
        width: '70%'
        //if the value is saved refresh page auto
      }).afterClosed().subscribe(val=>{
       
      });
    }
    
    getRecords(){
      this.api.getRecord()
      .subscribe({
        next:(res:any)=>{
          //console.log(res)
          this.dataSource = new MatTableDataSource(res.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error:()=>{
          alert("Error while fetching record data");
        }
      })
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
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
      editOfficer(row:any){

      }
      download(){
        var element = document.getElementById('table');
    var opt = {
      margin:       0.25,
      filename:     'recordstable.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  }

  deletesession()
  {
    sessionStorage.removeItem('admin_id')
    this.router.navigate(['/login']);
  }
  
}
