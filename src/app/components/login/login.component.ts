import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {

  hide=true;
  constructor(private customValidator:CustomvalidationService) { }
  submitted=false;

  loginForm:any;

  ngOnInit()
  {
    
    this.loginForm=new FormGroup
    ({

      username:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.minLength(5)]),
      password:new FormControl('',[Validators.required,Validators.minLength(8),this.customValidator.patternPassValidator()])

    })
  }
  get username()
  {
    return this.loginForm.get('username');
  }
  get password()
  {
    return this.loginForm.get('password');
  }
   
 
  onSubmit()
  {
    this.submitted=true;
    if(this.loginForm.valid)
    {
      alert('form submitted successfully');
      console.table(this.loginForm.value);
    }
  }

}
