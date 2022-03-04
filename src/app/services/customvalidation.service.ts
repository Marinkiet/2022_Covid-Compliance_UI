import { Injectable } from '@angular/core';
import { ValidatorFn,AbstractControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService
 {

    patternValidator():ValidatorFn
    {
      return (control: AbstractControl): any =>
      {
        if(!control.value)
        {
          return null;
        }

        const reg_pattern=new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
        const valid=reg_pattern.test(control.value);
        return valid ? null :{invalidPassword:true};
      };
    }
  //const RegPattern=new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
  

  matchPassword()
  {

  }
  
}
