import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HealthFormComponent } from './components/health-form/health-form.component';
import { OfficerComponent } from './components/officer/officer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ReportComponent } from './components/report/report.component';
import { ReportItemComponent } from './components/report/report-item/report-item.component';
import { ManageofficersComponent } from './components/manageofficers/manageofficers.component';
import { OfficerRecordsComponent } from './components/officer-records/officer-records.component';
import { StudentcardComponent } from './components/studentcard/studentcard.component';
import { AdminfeedbackComponent } from './components/adminfeedback/adminfeedback.component';
import { OfficerprofileComponent } from './components/officerprofile/officerprofile.component';
import { ViewaccessComponent } from './components/viewaccess/viewaccess.component';
import { ViewpendingComponent } from './components/viewpending/viewpending.component';
import { UserguardGuard } from './guards/userguard.guard';
import { AdminguardGuard } from './guards/adminguard.guard';
import { OfficerguardGuard } from './guards/officerguard.guard';
import { RegistervisitorComponent } from './components/registervisitor/registervisitor.component';
const routes: Routes = [
 {path:'',component:LandingPageComponent},
 {path:'register',component:RegisterComponent},
 {path:'login',component:LoginComponent},
 {path:'resetpass',component:ResetpasswordComponent},
 {path:'healthform',component:HealthFormComponent,canActivate:[UserguardGuard]},
 {path:'officer',component:OfficerComponent,canActivate:[OfficerguardGuard]},
 {path:'home',component:LandingPageComponent},
 {path:'aboutus',component:AboutUsComponent},
 {path:'contactus',component:ContactusComponent},
 {path:'userprofile',component:UserProfileComponent,canActivate:[UserguardGuard]},
 {path:'admin',component:AdminComponent,canActivate:[AdminguardGuard]},
 {path:'qrcode',component:HomeComponent,canActivate:[UserguardGuard]},
 {path:'report',component:ReportComponent,canActivate:[AdminguardGuard]},
 {path:'report-item',component:ReportItemComponent},
 {path:'manageofficers',component:ManageofficersComponent,canActivate:[AdminguardGuard]},
 {path:'officerrecords',component:OfficerRecordsComponent,canActivate:[OfficerguardGuard]},
 {path:'student',component:StudentcardComponent,canActivate:[OfficerguardGuard]},
 {path:'adminfeedback',component:AdminfeedbackComponent,canActivate:[AdminguardGuard]},
 {path:'officerprofile',component:OfficerprofileComponent,canActivate:[OfficerguardGuard]},
 {path:'viewaccess',component:ViewaccessComponent,canActivate:[OfficerguardGuard]},
 {path:'viewpending',component:ViewpendingComponent,canActivate:[OfficerguardGuard]},
 {path:'registervisitor',component:RegistervisitorComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingMods={HealthFormComponent,HomeComponent,AboutUsComponent,
  ContactusComponent,OfficerComponent,LoginComponent,
  RegisterComponent,UserProfileComponent,ResetpasswordComponent,AdminComponent,
  LandingPageComponent,ReportComponent,ReportItemComponent,ManageofficersComponent,
  OfficerRecordsComponent,StudentcardComponent}