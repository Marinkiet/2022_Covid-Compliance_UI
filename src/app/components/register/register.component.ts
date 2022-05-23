import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Typelist } from 'src/app/interfaces/registertypes/typelist';
import { Typeuser } from 'src/app/interfaces/registertypes/typeuser';
import { RegisterUser } from 'src/app/interfaces/user';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

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
  {} private apiUrl=environment.apiUrl;
  ngOnInit()
  {
    this.registerform=new FormGroup
    (
      {
        user_type:new FormControl('',[Validators.required]),
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

      this.checkUserTYpe()
   /*  if(this.registerform.invalid)
    {
      alert('Form not valid');
    } */
    if(this.registerform.valid)
    {
      alert('Form not valid');
    }
  }
  onFileSelected(event:any) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("filename", file);

        const upload$ = this.http.post(`${this.apiUrl}/users/`, formData);

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


  selected='none';
  isStaff=false;
  isVisitor=false;
  checkUserTYpe()
  {
    if(this.selected==null)
    {
      this.isStaff=false;
      this.isVisitor=false;
      
    }
    if(this.selected=='Staff')
    {
      this.isStaff=true;
      this.isVisitor=false;
      //alert('Staff User selected')
    }
    if(this.selected=='Visitor')
    {
      this.isVisitor=true;
      this.isStaff=false;
    }

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
      alert('Form not valid');
    }
  }

  //Select which user to be registered as 


  


  //End of the choosing 




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
