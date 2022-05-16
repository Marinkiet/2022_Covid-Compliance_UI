import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswresetemailService } from 'src/app/services/passwresetemail.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit
{

  constructor(private router:Router,
    private passwresetsev:PasswresetemailService) { }

    resetForm !:FormGroup;

  ngOnInit():void
  {
    this.resetForm=new FormGroup
    (
      {
        email:new FormControl('',[Validators.required]),
        User_id:new FormControl('',[Validators.required])
      }
    )
  }


  get email()
  {
    return this.resetForm.get('email');
  }
  get User_id()
  {
    return this.resetForm.get('User_id');
  }
  onSendEmail()
  {
    this.passwresetsev.sentEmail(this.resetForm.value).subscribe(
      reset=>
      {
        console.log(reset);
      }
    )
  }
  submitForm()
  {
    //this.submitted = true;
    if(this.resetForm.valid)
    {
      this.onSendEmail();
      alert('reset form submitted');
      //console.log('Form submitted succesffuly');
    }
  }
}
