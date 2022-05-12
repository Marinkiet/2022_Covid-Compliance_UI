import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ViewImage } from 'src/app/interfaces/file-to-upload';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(
    private http: HttpClient, private router: Router,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.onView();
  }
  ngAfterViewInit() {
    this.onView();
  }

  pic_path: any;
  name: string = "";

  getName(name: string) {
    this.name = name;
  }
  onFileSelected(event: any) {
    this.pic_path = event.target.files[0];
    //console.log('File '+this.pic_path)
    console.log(this.pic_path)
  }

  onUpload() {
    let formData = new FormData()
    formData.set('name', this.name)
    formData.set('pic_path', this.pic_path)
    //fd.append('pic_path',this.selectedFile,this.selectedFile.name);

    this.http.post('http://localhost:3000/upload_image/image', formData).subscribe(
      res => {
        console.log(res)
      }
    )
    this.onView();
    
  }

  pic: string = 'pic_path-1650626677588.png';
  images!: ViewImage[];

  image:any
  onView() {
    this.http.get('http://localhost:3000/select_all_image/').subscribe(
      (res: any) => {
        this.image = res.data
        /* console.log("This is the paths "+this.images[0].pic_path);
        console.log(this.images[0].pic_path); */
        //console.log(res)
      }
    );
  }

  displayedColumns: string[] = ['image_id', 'pictureName', 'pic_path'];
  dataSource !: MatTableDataSource<ViewImage>;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletesession() {
    sessionStorage.removeItem('admin_id');
    this.router.navigate(['/login']);
  }

}