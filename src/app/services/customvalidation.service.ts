import { Injectable } from '@angular/core';
import { ValidatorFn,AbstractControl} from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
//import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService
 {


  /*passwordMatc(password: string, confirmPassword: string): ValidatorFn | ValidatorFn[] | null | undefined 
  {
    throw new Error('Method not implemented.');
  }*/
  passwordMatch(password: string, confirmPassword: string)
  {
    return (formGroup: AbstractControl): ValidationErrors | null => 
    {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if(!passwordControl || !confirmPasswordControl) 
      {
        return null;
      }

      if(confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) 
      {
        return null;
      }

      if(passwordControl.value !== confirmPasswordControl.value) 
      {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };

      } 
      else 
      {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

    patternPassValidator():ValidatorFn
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
  

  patternMailValidator(): ValidatorFn
   {
    return (control: AbstractControl): any => {
      if (!control.value) {
        return null;
      }

      const reg_pattern = new RegExp('');
      const valid = reg_pattern.test(control.value);
      return valid ? null : { invalidEmail: true };

    };
  }

 /* MatchPass(password: string, confirmPassword: string)
  {
    return (formGroup: FormGroup) =>
    {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) 
      {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) 
      {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) 
      {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else 
      {
        confirmPasswordControl.setErrors(null);
      }
    }
  }*/

}
  

