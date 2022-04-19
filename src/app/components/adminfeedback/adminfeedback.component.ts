import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Comments } from 'src/app/interfaces/user';
import { ApiService } from 'src/app/services/api.service';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-adminfeedback',
  templateUrl: './adminfeedback.component.html',
  styleUrls: ['./adminfeedback.component.css']
})
export class AdminfeedbackComponent implements OnInit {

  displayedColumns: string[] = ['Feedback_id','username', 'Comment', 'Date'];
  dataSource !: MatTableDataSource<Comments>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private router:Router, 
    private dialog: MatDialog,
    private api:ApiService,
    private observer: BreakpointObserver,
    private commentservice:CommentService) { }

  ngOnInit(): void {
    this.getAllComments();
  }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

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
  
  getAllComments(){
    this.commentservice.getComment()
    .subscribe({
      next:(res:any)=>{
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:()=>{
        alert("Error while fetching officer data");
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



  deletesession()
  {
    sessionStorage.removeItem('admin_id');
    this.router.navigate(['/login']);
  }
}
