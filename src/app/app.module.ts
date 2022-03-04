import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


//Services
import { CustomvalidationService } from './services/customvalidation.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FooterComponent,
    LoginComponent,
    WelcomeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [CustomvalidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
