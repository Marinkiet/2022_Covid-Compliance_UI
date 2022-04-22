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
  percentDone !: number;
  uploadSuccess !: boolean;
  constructor(
    private http:HttpClient,private router:Router,
    private api: ApiService
  ) { }

  ngOnInit(): void {

  }


pic_path:any;
name:string="";

getName(name:string)
{
  this.name=name;
}
onFileSelected(event:any)
{
  this.pic_path=event.target.files[0];
  //console.log('File '+this.pic_path)
  console.log(this.pic_path)
}

onUpload()
{
 let formData=new FormData()
 formData.set('name',this.name)
 formData.set('pic_path',this.pic_path)
 //fd.append('pic_path',this.selectedFile,this.selectedFile.name);
 this.http.post('http://localhost:3000/upload_image/image',formData).subscribe(
   res=>
   { 
     console.log(res)
  }
 )
}

pic:string='pic_path-1650626677588.png';
images!:ViewImage[];

onView()
{
  this.http.get('http://localhost:3000/select_all_image/').subscribe(
   (res:any)=>
   { 
    this.images=res.data
    /* console.log("This is the paths "+this.images[0].pic_path);
    console.log(this.images[0].pic_path); */
     //console.log(res)
  }
 )
}


displayedColumns: string[] = ['image_id', 'pictureName','pic_path'];
    dataSource !: MatTableDataSource<ViewImage>;
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

  
  url: any;
  url2: any;
  msg = "";
  url3: any;
  url4: any;
  url5: any;
  url6: any;
  url7: any;
  url8: any;
  url9: any;
  url10: any;
  url11: any;
  url12: any;
  getImageSrc(choice) {
    const src = choice.id;
    alert(src);
  }

  selectFile(event: any) {
    this.api.postImage(this.url)
      .subscribe({
        next: (res: any) => {
          //alert('officer registered successfully');
          console.log(res)
        },
        error: () => {
          alert('Could not upload images ');
        }

      })

    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported jpg/jpeg/png/gif";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url = reader.result;
      //this.api.postImage(this.url).subscribe({next:(res:any)=>{}})
    }
  }

  selectFile2(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select a video';
      return;
    }

    var reader2 = new FileReader();
    reader2.readAsDataURL(event.target.files[0]);

    reader2.onload = (_event) => {
      this.msg = "";
      this.url2 = reader2.result;

    }

  }

  selectFile3(event: any) {
    this.api.postImage(this.url3)
      .subscribe({
        next: (res: any) => {
          //alert('officer registered successfully');
          console.log(res)
        },
        error: () => {
          alert('Could not upload images ');
        }

      })

    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported jpg/jpeg/png/gif";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url3 = reader.result;
      //this.api.postImage(this.url).subscribe({next:(res:any)=>{}})
    }
  }

  selectFile4(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select a video';
      return;
    }

    var reader2 = new FileReader();
    reader2.readAsDataURL(event.target.files[0]);

    reader2.onload = (_event) => {
      this.msg = "";
      this.url4 = reader2.result;

    }

  }
  selectFile5(event: any) {
    this.api.postImage(this.url5)
      .subscribe({
        next: (res: any) => {
          //alert('officer registered successfully');
          console.log(res)
        },
        error: () => {
          alert('Could not upload images ');
        }

      })

    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported jpg/jpeg/png/gif";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url5 = reader.result;
      //this.api.postImage(this.url).subscribe({next:(res:any)=>{}})
    }
  }

  selectFile6(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select a video';
      return;
    }

    var reader2 = new FileReader();
    reader2.readAsDataURL(event.target.files[0]);

    reader2.onload = (_event) => {
      this.msg = "";
      this.url6 = reader2.result;

    }

  }
  selectFile7(event: any) {
    this.api.postImage(this.url7)
      .subscribe({
        next: (res: any) => {
          //alert('officer registered successfully');
          console.log(res)
        },
        error: () => {
          alert('Could not upload images ');
        }

      })

    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported jpg/jpeg/png/gif";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url7 = reader.result;
      //this.api.postImage(this.url).subscribe({next:(res:any)=>{}})
    }
  }

  selectFile8(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select a video';
      return;
    }

    var reader2 = new FileReader();
    reader2.readAsDataURL(event.target.files[0]);

    reader2.onload = (_event) => {
      this.msg = "";
      this.url8 = reader2.result;

    }

  }
  selectFile9(event: any) {
    this.api.postImage(this.url9)
      .subscribe({
        next: (res: any) => {
          //alert('officer registered successfully');
          console.log(res)
        },
        error: () => {
          alert('Could not upload images ');
        }

      })

    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported jpg/jpeg/png/gif";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url9 = reader.result;
      //this.api.postImage(this.url).subscribe({next:(res:any)=>{}})
    }
  }

  selectFile10(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select a video';
      return;
    }

    var reader2 = new FileReader();
    reader2.readAsDataURL(event.target.files[0]);

    reader2.onload = (_event) => {
      this.msg = "";
      this.url10 = reader2.result;

    }

  }
  selectFile11(event: any) {
    this.api.postImage(this.url11)
      .subscribe({
        next: (res: any) => {
          //alert('officer registered successfully');
          console.log(res)
        },
        error: () => {
          alert('Could not upload images ');
        }

      })

    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select an image';
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.msg = "Only images are supported jpg/jpeg/png/gif";
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.msg = "";
      this.url11 = reader.result;
      //this.api.postImage(this.url).subscribe({next:(res:any)=>{}})
    }
  }

  selectFile12(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      this.msg = 'You must select a video';
      return;
    }

    var reader2 = new FileReader();
    reader2.readAsDataURL(event.target.files[0]);

    reader2.onload = (_event) => {
      this.msg = "";
      this.url12 = reader2.result;

    }

  }


  deletesession()
  {
    sessionStorage.removeItem('admin_id');
    this.router.navigate(['/login']);
  }

}