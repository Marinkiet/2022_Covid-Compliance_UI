import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-officer',
  templateUrl: './add-officer.component.html',
  styleUrls: ['./add-officer.component.css']
})
export class AddOfficerComponent implements OnInit {

  officerForm !: FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    private api:ApiService,
    private dialogRef : MatDialogRef<AddOfficerComponent>
    ) { }

  ngOnInit(): void {
    this.officerForm = this.formBuilder.group({
      officer_id: ['', Validators.required],
      officer_firstName: ['', Validators.required],
      officer_lastName: ['', Validators.required],
      officer_emailAddress: ['', Validators.required],
      officer_phoneNumber: ['', Validators.required],
      officer_gender: ['', Validators.required],
      officer_oldPassword: ['', Validators.required],
      officer_newPassword: ['', Validators.required],

    });
  }
  addOfficer(){
   // console.log(this.officerForm.value);
   if(this.officerForm.valid){
     this.api.postOfficer(this.officerForm.value)
     .subscribe({
       next:(res)=>{
         alert('officer registered successfully');
         this.dialogRef.close(); //close form once saved
       },
       error:()=>{
        alert('Could no register officer ');

       }
       
     })
   }
  }

}
