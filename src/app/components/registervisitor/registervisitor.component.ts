import { RegisterVisitor } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { VisitorserviceService } from 'src/app/services/visitorservice.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-registervisitor',
  templateUrl: './registervisitor.component.html',
  styleUrls: ['./registervisitor.component.css']
})
export class RegistervisitorComponent implements OnInit {

  constructor(
    private toast:NgToastService,private visitorservice:VisitorserviceService,private router:Router,private customvalidator:CustomvalidationService) { }

  campuses:any[]=['Arcadia','Arts','eMalahleni','Ga-Rankuwa','Mbombela','Polokwane','Pretoria','Soshanguve South','Soshanguve North',];
  visitorRegForm:any;
  hide=true;
  submitted=false;

  ngOnInit(): void
  {
    this.visitorRegForm=new FormGroup
    (
      {
        Visitor_id:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
        First_name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        Last_name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      
        Password:new FormControl('',[Validators.required,Validators.minLength(8),this.customvalidator.patternPassValidator()]),
        confirm_password:new FormControl('',[Validators.required]),
        Email:new FormControl('',[Validators.required,Validators.email]),
        Cellphone_number: new FormControl('',[Validators.required, Validators.pattern('^(27|27|0)[0-9]{2}( |-)?[0-9]{3}( |-)?[0-9]{4}( |-)?(x[0-9]+)?(ext[0-9]+)?')]),
      },
      {
        validators: this.customvalidator.passwordMatch('password','confirm_password')
      });
  }



  
  get Visitor_id()
  {
    return this.visitorRegForm.get('Visitor_id');
  }
  get First_name()
  {
    return this.visitorRegForm.get('First_name');
  }

  get Last_name()
  {
    return this.visitorRegForm.get('Last_name');
  }
  get Password()
  {
    return this.visitorRegForm.get('Password');
  }
  get confirm_password()
  {
    return this.visitorRegForm.get('confirm_password');
  }
  get Email()
  {
    return this.visitorRegForm.get('Email');
  }
/*   get email()
  {
    return this.visitorRegForm.get('email');
  } */
  get Cellphone_number()
  {
    return this.visitorRegForm.get('Cellphone_number');
  }

   RegisterVisitor()
  {
   //console.log(this.officerForm.value);
   //if we not adding then we edit
   
     if (this.visitorRegForm.valid)
    {
       this.visitorservice.registerVisitor(this.visitorRegForm.value)
      .subscribe({
        next:(res:RegisterVisitor)=>
        {

          //alert('User registered successfully');
          this.toast.success({detail:"Register Message",summary:"Registered Successfully",duration:4000})
          this.router.navigate(['login']);
          console.log(res);
        },
        error:()=>{
         //alert('Could no register Visitor ');
         this.toast.error({detail:"Register Message",summary:"Unable To Register",duration:4000})
        }
        
      })
    }
  
  
  } 

  onSubmit()
  {
    
      this.RegisterVisitor()
    
  }
}
