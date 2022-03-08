import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {WelcomeComponent} from './components/welcome/welcome.component';
import { HealthFormComponent } from './components/health-form/health-form.component';
import { OfficerComponent } from './components/officer/officer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactusComponent } from './components/contactus/contactus.component';
const routes: Routes = [

  {path:'',component:WelcomeComponent},
 {path:'register',component:RegisterComponent},
 {path:'login',component:LoginComponent},
 {path:'resetpass',component:ResetpasswordComponent},
 {path:'healthform',component:HealthFormComponent},
 {path:'officer',component:OfficerComponent},
 {path:'home',component:HomeComponent},
 {path:'aboutus',component:AboutUsComponent},
 {path:'contactus',component:ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingMods={HealthFormComponent,HomeComponent,AboutUsComponent,ContactusComponent,OfficerComponent,WelcomeComponent,LoginComponent,RegisterComponent,ResetpasswordComponent}