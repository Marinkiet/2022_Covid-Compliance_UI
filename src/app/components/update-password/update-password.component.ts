import { Component, OnInit,Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { delay } from 'rxjs';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(
    private toast:NgToastService,
    private userservice:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private route:Router,
    private customvalidator:CustomvalidationService) { }

 
  passwForm: any;
  User_id_Param:any;
  hide=true;

  ngOnInit(): void {
    this.passwForm=new FormGroup
    ({
  
      Password:new FormControl('',[Validators.required,Validators.minLength(8),this.customvalidator.patternPassValidator()]),
      confirm_password:new FormControl('',[Validators.required]),
    },
    {
      validators: this.customvalidator.passwordMatch('Password','confirm_password')
    })
     //  alert(sessionStorage.getItem('Email'))

     this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
     {
       this.User_id_Param=params.get('User_id')
       //alert('tHE USER'+this.User_id_Param)
       this.onGetUser(this.User_id_Param)
     })
    //alert(this.UserEmail_Param);
    this.passwForm.controls['Password'].setValue('Password');
  }

  get Password()
  {
    return this.passwForm.get('Password');
  }
  get confirm_password()
  {
    return this.passwForm.get('confirm_password');
  }

  users!: User[];
  onGetUser(User_id:string)
  {
    this.userservice.getUser(`${User_id}`).subscribe(
      (response: any) => {
        if (response.message == 'Successful') {
          //alert(response)
          this.users = response.data;
          //alert(this.users)
        }
      },
      (error: any) => console.log('this is the error' + error),
      () => console.log('Done getting user'),
    );
  }
  onUpdatePassw()
  {
    if(this.passwForm.valid)
    {
      this.userservice.updatePassword(this.passwForm.value,this.User_id_Param).subscribe(
       (response: any)=>
        {
          console.log(response);
          console.log('Update successful');
          this.toast.success({detail:"Password Message",summary:"Password Updated",duration:3500})
          this.router.navigate(['/login']);
        },
        (error: any) => console.log('this is the error' + error),
        () => console.log('Done getting user'),
      )
      this.passwForm.reset();
    }
 
  }
  

}
