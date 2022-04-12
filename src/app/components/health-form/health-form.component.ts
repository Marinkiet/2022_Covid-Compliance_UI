import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { first } from 'rxjs';
import { CustomvalidationService } from 'src/app/services/customvalidation.service';
//import { HealthformService } from 'src/app/services/healthform.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-health-form',
  templateUrl: './health-form.component.html',
  styleUrls: ['./health-form.component.css']
})
export class HealthFormComponent implements OnInit {
  fileName = '';
  healthform:any;
  submitted=false;
  hide=true;
  constructor(
    private formService:UserService, 
    private formBuilder: FormBuilder,
    )
     { }

  ngOnInit(): void {

    this.closeForm();
    this.healthform=new FormGroup
    (
      {
        vstatus:new FormControl('',[Validators.required]),
        covid19:new FormControl('',[Validators.required]),
        recentCough:new FormControl('',[Validators.required]),
        difficultyBreathing:new FormControl('',[Validators.required]),
        lossOfTaste:new FormControl('',[Validators.required]),
        heavyHeadache:new FormControl('',[Validators.required]),
        infectedPerson:new FormControl('',[Validators.required]),
     
      },
    
    );

  }
 
  get vstatus()
  {
    return this.healthform.get('vstatus');
  }
  get covid19()
  {
    return this.healthform.get('covid19');
  }

  get recentCough()
  {
    return this.healthform.get('recentCough');
  }
  get difficultyBreathing()
  {
    return this.healthform.get(' difficultyBreathing');
  }
  get lossOfTaste()
  {
    return this.healthform.get('lossOfTaste');
  }
  get  heavyHeadache()
  {
    return this.healthform.get(' heavyHeadache');
  }
  get infectedPerson()
  {
    return this.healthform.get('infectedPerson');
  }
  

  close=false;
  closeForm()
  {
    if(this.healthform.valid)
    {
      this.close=true;
    }
  }
  postHealthData()
  {
   
    this.formService.form(this.healthform.value).pipe(first()).subscribe(
      data => {
        console.log(data)
      },
     
    
    );

  /*   if(this.healthform.valid){
      alert('form valid');
    }
    if(this.healthform.invalid){
      alert('form invalid');
    } */
  }



  onSubmit()
  {
    this.submitted=true;
    if(this.healthform.valid)
    {
      alert('form submitted successfully');
      console.table(this.healthform.value);
    }
  }


}
