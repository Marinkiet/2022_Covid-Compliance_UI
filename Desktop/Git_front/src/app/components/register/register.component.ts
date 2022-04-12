import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

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
        userid:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
        fname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        lname:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
        uname:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
        pword:new FormControl('',[Validators.required,Validators.minLength(8),this.customvalidator.patternPassValidator()]),
        con_pword:new FormControl('',[Validators.required]),
        email:new FormControl('',[Validators.required,Validators.email]),
        phone:new FormControl('',[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
      },
      {
        validators: this.customvalidator.passwordMatch('pword','con_pword')
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


  get userid()
  {
    return this.registerform.get('userid');
  }
  get fname()
  {
    return this.registerform.get('fname');
  }

  get lname()
  {
    return this.registerform.get('lname');
  }
  get uname()
  {
    return this.registerform.get('uname');
  }
  get pword()
  {
    return this.registerform.get('pword');
  }
  get con_pword()
  {
    return this.registerform.get('con_word');
  }
  get email()
  {
    return this.registerform.get('email');
  }
   get phone()
  {
    return this.registerform.get('phone');
  }


  onSubmit()
  {
    this.submitted=true;
    if(this.registerform.valid)
    {
      alert('form submitted successfully');
      console.table(this.registerform.value);
    }
  }

}
