import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { OfficerService } from './../../services/officer.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AdminService } from './../../services/admin.service';
import { first, map } from 'rxjs';
import { Typeuser } from './../../interfaces/usertypes/typeuser';
import { Typelist } from 'src/app/interfaces/usertypes/typelist';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
 {
  [x: string]: any;
  hide=true;
  routepage='/';
  constructor(
    private router:Router,
    private userservice:UserService,
    private officerservice:OfficerService,
    private customValidator:CustomvalidationService,
    private adminservice:AdminService,
    ) { }
  submitted=false;
  //user_type:string[]=['Admin','Officer','Guest','Staff','Student'];

  loginForm:any;
  value:any;
  userinfo:any;
  ngOnInit()
  {
    
    this.loginForm=new FormGroup
    ({
      user_type:new FormControl('',[Validators.required]),
      User_id:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$'),Validators.minLength(5)]),
      Password:new FormControl('',[Validators.required,Validators.minLength(8),this.customValidator.patternPassValidator()])

    })
  }
  users = Typelist;
  selectedUser!: Typeuser;

  onSelectuser(userType:Typeuser):void
  {
    this.selectedUser=userType;
    
  }
  
  get User_id()
{
    return this.loginForm.get('User_id');
}
get Password()
{
  return this.loginForm.get('Password');
}
 


//user Type Selection
 UserSelected(value:any)
 {
  this.customFunction(value);
  switch(value)
  {
    case 1:
      {
        alert('This is the admin talking');
        this.adminservice.loginAdmin(this.loginForm.value).pipe(first()).subscribe(
          data => {
            if (data.message == 'Successful') {
             //const redirect = this.userservice.redirecturl ? this.userservice.redirecturl : '/admin'; 
             // this.router.navigate(['/admin']);
             this.routepage = '/admin'
            }
            else if (data.message == 'Unsuccessful') {
              alert(' Admin Please Enter valid credentials');
            }

          },
          (error: any) => console.log('this is the error' + error),
          () => console.log('Done Admin student in'),
        );
      }
      break;

    case 2:
      {
        alert('This is the Officer talking');

        this.officerservice.loginOfficer(this.loginForm.value).pipe(first()).subscribe(
          data => {

            console.log("This is the message:"+data.message)
            
            if(data.message == 'Successful') {
              // const redirect = this.officerservice.redirecturl ? this.officerservice.redirecturl : '/officer'; 
              //this.router.navigate(['/officer']);
            }
            else if (data.message == 'Unsuccessful') {
              alert('Officer Please valid credentials');
            }

          },
          (error: any) => console.log('this is the error' + error),
          () => console.log('Done login Officer in'),
        );

      }

      break;

      //student login part
    case 3:
      {
        alert('This is the Student');
      
          this.userservice.loginUser(this.loginForm.value).pipe(first()).subscribe(
            data => {
          

              if (data.message == 'Successful')
              {
                /* const redirect = this.userservice.redirecturl ? this.userservice.redirecturl : '/qrcode'; */
                this.router.navigate(['qrcode']);

              }
              else if (data.message =='Unsuccessful')
              {
                alert(' Student Please valid credentials');
              }

            },
            (error: any) => console.log('this is the error' + error),
            () => console.log('Done login student in'),
          );
      }
      break;

    case 4:
      {
        alert('This is the Visitor talking');

      }
      break;

    case 5:
      {
        alert('This is the staff talking');
      }
      break;
  }
 

 }
usertype!:string;

 customFunction(option:any)
 {
   this.usertype="The value "+option+" was selected from the dropdown";
 }

  onSubmit()
  {
    /*this.submitted=true;
    if(this.loginForm.valid)
    {
      //alert('form submitted successfully');
      this.linktoqrcode="/qrcode";
      //console.table(this.loginForm.value);
    }*/
  }
}
