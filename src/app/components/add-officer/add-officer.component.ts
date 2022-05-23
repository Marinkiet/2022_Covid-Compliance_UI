import { Component, Inject, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';




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
  customValidator: any;

  constructor(
    private formBuilder: FormBuilder,
    private api:ApiService,
    private dialogRef : MatDialogRef<AddOfficerComponent>,
    //inject mat-dialog-data to get a single row array of data
    @Inject(MAT_DIALOG_DATA) public editData:any
   
    ) { }

  ngOnInit(): void {
    this.officerForm = new FormGroup({

      Officer_id:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
      Campus_id:new FormControl ('', Validators.required),
      First_Name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      Last_Name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      Gender: new FormControl ('', Validators.required),
      Cellphone_number: new FormControl ('', Validators.required),
      Email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(9),this.customValidator.patternPassValidator()]),
      confirm_password:new FormControl('',[Validators.required]),
     
    
      
    });
    //check if row data is reflecting from the dialog then patch into dialof input fields
    //console.log(this.editData);

    if(this.editData){
      this.actionBtn = "Update";
      this.lblType = "Edit Officer";
      this.passwType="Old Password";
      this.passwTypeConfirm = "New Password";
        this.officerForm.controls['Officer_id'].setValue(this.editData.Officer_id);
        this.officerForm.controls['Campus_id'].setValue(this.editData.Campus_id);
        this.officerForm.controls['First_name'].setValue(this.editData.First_name);
        this.officerForm.controls['Last_name'].setValue(this.editData.Last_name);
        this.officerForm.controls['Gender'].setValue(this.editData.Gender);
        this.officerForm.controls['Cellphone_number'].setValue(this.editData.Cellphone_number);
        this.officerForm.controls['Email'].setValue(this.editData.Email);
        this.officerForm.controls['Password'].setValue(this.editData.Password);

        
    }

   
    const draft = sessionStorage.getItem("userEdits");
    if (draft)
    {
      
      this.officerForm.setValue(JSON.parse(draft));
    }
    this.officerForm.valueChanges.pipe()
      .subscribe( val =>
        { 
          sessionStorage.setItem("userEdits",JSON.stringify(val))
        });

  }
  addOfficer()
  {
   // console.log(this.officerForm.value);
   //if we not adding then we edit
   if(!this.editData){
    if(this.officerForm.valid)
    {this.ClearSessions();
      this.api.postOfficer(this.officerForm.value)
      .subscribe({
        next:(res:any)=>{
          //alert('officer registered successfully');
          this.dialogRef.close('saved'); //close form once saved
        },
        error:()=>{
         alert('Could not register officer ');
        }

      })
    }
   }else{
     this.updateOfficer()
   }

  }
  updateOfficer(){
this.api.putOfficer(this.officerForm.value)
.subscribe({
  next:(res)=>{
    //alert("Updated Officer Successfully");
    this.officerForm.reset();
    this.dialogRef.close('Updated');
  },error:()=>{
    alert("Error while updating officer");
  }
})
  }


  ClearSessions()
  {
    sessionStorage.removeItem('userEdits')
  }



}