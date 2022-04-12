import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs';
import { HealthFormComponent } from '../health-form/health-form.component';

@Component({
  selector: 'app-officerprofile',
  templateUrl: './officerprofile.component.html',
  styleUrls: ['./officerprofile.component.css']
})
export class OfficerprofileComponent implements OnInit {

  userProfile !: FormGroup;
  actionBtn:string = "Save";

  constructor( 
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private observer: BreakpointObserver,
    ) { }

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
