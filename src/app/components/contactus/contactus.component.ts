import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HealthFormComponent } from '../health-form/health-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  id!: number;
  fullname!: String;
  email!: string;
  message!: string;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  submitForm() {
    alert('Submitted Successful');
  }
  ngOnInit(): void {
  }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private dialog: MatDialog,
    private observer: BreakpointObserver) {}
    
    openDialog() {
      this.dialog.open(HealthFormComponent, {
        width: '30%'
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
 
  
}
