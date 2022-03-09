import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile !: FormGroup;
  actionBtn:string = "Save";

  constructor( private formBuilder: FormBuilder) { }

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
}
