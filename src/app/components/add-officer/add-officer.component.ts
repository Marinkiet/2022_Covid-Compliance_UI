import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-officer',
  templateUrl: './add-officer.component.html',
  styleUrls: ['./add-officer.component.css']
})
export class AddOfficerComponent implements OnInit {

  officerForm !: FormGroup;
  actionBtn:string ='Save';
  lblType:string = 'Add Officer';
  passwType:string = 'Password';
  passwTypeConfirm = 'Confirm Password';
  constructor( 
    private formBuilder: FormBuilder,
    private api:ApiService,
    private dialogRef : MatDialogRef<AddOfficerComponent>,
    //inject mat-dialog-data to get a single row array of data
    @Inject(MAT_DIALOG_DATA) public editData:any
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
    //check if row data is reflecting from the dialog then patch into dialof input fields
    //console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Update";
      this.lblType = "Edit Officer"; 
      this.passwType="Old Password";
      this.passwTypeConfirm = "New Password";
        this.officerForm.controls['officer_id'].setValue(this.editData.officer_id);
        this.officerForm.controls['officer_firstName'].setValue(this.editData.officer_firstName);
        this.officerForm.controls['officer_lastName'].setValue(this.editData.officer_lastName);
        this.officerForm.controls['officer_emailAddress'].setValue(this.editData.officer_emailAddress);
        this.officerForm.controls['officer_gender'].setValue(this.editData.officer_gender);
        this.officerForm.controls['officer_oldPassword'].setValue(this.editData.officer_oldPassword);
        this.officerForm.controls['officer_newPassword'].setValue(this.editData.officer_newPassword);
        this.officerForm.controls['officer_phoneNumber'].setValue(this.editData.officer_phoneNumber);
    }
  }
  addOfficer(){
   // console.log(this.officerForm.value);
   //if we not adding then we edit
   if(!this.editData){
    if(this.officerForm.valid){
      this.api.postOfficer(this.officerForm.value)
      .subscribe({
        next:(res)=>{
          alert('officer registered successfully');
          this.dialogRef.close('saved'); //close form once saved
        },
        error:()=>{
         alert('Could no register officer ');
 
        }
        
      })
    }
   }else{
     this.updateOfficer()
   }
  
  }
  updateOfficer(){
this.api.putOfficer(this.officerForm.value,this.editData.id)
.subscribe({
  next:(res)=>{
    alert("Updated Officer Successfully");
    this.officerForm.reset();
    this.dialogRef.close('Updated');
  },error:()=>{
    alert("Error while updating officer");
  }
})
  }

}
