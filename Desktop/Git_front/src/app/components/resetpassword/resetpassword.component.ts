import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit
{

  constructor() { }


  submitted=false;
  public resetForm:any
  ngOnInit()
  {
    this.resetForm=new FormGroup
    (
      {
        email:new FormControl('',[Validators.required])
      }
    )
  }


  get email()
  {
    return this.resetForm.get('email');
  }

  onSubmit()
  {
    this.submitted = true;
    if(this.resetForm.valid)
    {
      alert('reset form submitted')
      console.log('Form submitted succesffuly');
    }
  }
}
