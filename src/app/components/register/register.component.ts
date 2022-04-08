import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/interfaces/user';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //customvalidator: any;
  fileName = '';
  registerform:any;
  campuses:any[]=['Arcadia','Arts','eMalahleni','Ga-Rankuwa','Mbombela','Polokwane','Pretoria','Soshanguve South','Soshanguve North',];
  vac_opts:any[]=['Yes','No'];
  submitted=false;
  hide=true;

  constructor(
    private router:Router,
    private userservice:UserService,
    private customvalidator:CustomvalidationService,
    private formBuilder: FormBuilder,
    private http:HttpClient
    )
  {}
  ngOnInit()
  {
    this.registerform=new FormGroup
    (
      {
        userId:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
        firstNames:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        lastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      //username:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
        password:new FormControl('',[Validators.required,Validators.minLength(8),this.customvalidator.patternPassValidator()]),
        confirm_password:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        cellphone:new FormControl(''),
      },
      {
        validators: this.customvalidator.passwordMatch('password','confirm_password')
      });
  }
  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("filename", file);

        const upload$ = this.http.post("http://localhost:3000/users/", formData);

        upload$.subscribe();
    }
}


  get userId()
  {
    return this.registerform.get('userId');
  }
  get firstNames()
  {
    return this.registerform.get('firstNames');
  }

  get lastName()
  {
    return this.registerform.get('lastName');
  }
  get username()
  {
    return this.registerform.get('username');
  }
  get password()
  {
    return this.registerform.get('password');
  }
  get confirm_password()
  {
    return this.registerform.get('confirm_password');
  }
  get email()
  {
    return this.registerform.get('email');
  }
   get cellphone()
  {
    return this.registerform.get('cellphone');
  }


  onSubmit()
  {
    this.submitted=true;
    if(this.registerform.valid)
    {
      //alert('form submitted successfully');
      console.table(this.registerform.value);
      this. RegisterUser();
    }

    if(this.registerform.invalid)
    {
<<<<<<< HEAD
      alert('Form not valid');
=======
      //alert('Form not valid');
>>>>>>> main
    }
  }


  RegisterUser()
  {
   //console.log(this.officerForm.value);
   //if we not adding then we edit
   
    if(this.registerform.valid)
    {
      this.userservice.registerUser(this.registerform.value)
      .subscribe({
        next:(res:RegisterUser)=>{
          alert('User registered successfully');
          this.router.navigate(['login']);
          console.log(res);
        },
        error:()=>{
         alert('Could no register officer ');
        }
        
      })
    }
  
  
  }

}
