import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HealthFormComponent } from '../health-form/health-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile !: FormGroup;
  actionBtn:string = "Save";

  constructor( 
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private observer: BreakpointObserver) { }

  ngOnInit(): void {
    this.userProfile = this.formBuilder.group({
      userid: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      gender: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],

    });
  }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

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
