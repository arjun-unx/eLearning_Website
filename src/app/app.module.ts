import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownComponent } from './down/down.component';
import { HomeComponent } from './home/home.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MatCarouselModule } from '@ngmodule/material-carousel';
import { CertificateComponent } from './certificate/certificate.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    DownComponent,
    HomeComponent,
    MainNavbarComponent,
    CertificateComponent,
    PanelComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCarouselModule.forRoot(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
