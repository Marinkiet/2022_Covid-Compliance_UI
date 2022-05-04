import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/interfaces/user';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {

  constructor(
    private userservice:UserService,private router:Router,private customvalidator:CustomvalidationService) { }

  campuses:any[]=['Arcadia','Arts','eMalahleni','Ga-Rankuwa','Mbombela','Polokwane','Pretoria','Soshanguve South','Soshanguve North',];
  userRegForm:any;
  hide=true;
  submitted=false;

  ngOnInit(): void
  {
    this.userRegForm=new FormGroup
    (
      {
        userId:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
        firstNames:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      //username:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
        password:new FormControl('',[Validators.required,Validators.minLength(8),this.customvalidator.patternPassValidator()]),
        confirm_password:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        cellphone: new FormControl('', [Validators.required]),
      },
      {
        validators: this.customvalidator.passwordMatch('password','confirm_password')
      });
  }



  get userId()
  {
    return this.userRegForm.get('userId');
  }
  get firstNames()
  {
    return this.userRegForm.get('firstNames');
  }

  get lastName()
  {
    return this.userRegForm.get('lastName');
  }
  get username()
  {
    return this.userRegForm.get('username');
  }
  get password()
  {
    return this.userRegForm.get('password');
  }
  get confirm_password()
  {
    return this.userRegForm.get('confirm_password');
  }
  get email()
  {
    return this.userRegForm.get('email');
  }
   get cellphone()
  {
    return this.userRegForm.get('cellphone');
  }



  RegisterUser()
  {
   //console.log(this.officerForm.value);
   //if we not adding then we edit
   
    if(this.userRegForm.valid)
    {
      this.userservice.registerUser(this.userRegForm.value)
      .subscribe({
        next:(res:RegisterUser)=>{
          alert('User registered successfully');
          this.router.navigate(['login']);
          console.log(res);
        },
        error:()=>{
         alert('Could no register User ');
        }
        
      })
    }
  
  
  }


  onSubmit()
  {
    this.submitted=true;
    if(this.userRegForm.valid)
    {
      //alert('form submitted successfully');
      console.table(this.userRegForm.value);
      this. RegisterUser();
    }
  }
}
