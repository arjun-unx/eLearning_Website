import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DownComponent } from './down/down.component';
import { HomeComponent } from './home/home.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { CertificateComponent } from './certificate/certificate.component';
import { PanelComponent } from './panel/panel.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "/home"},
  {path: "home",component: HomeComponent},
  {path: "down",component: DownComponent},
  {path: "main-navbar",component: MainNavbarComponent},
  {path: "certificate",component: CertificateComponent},
  {path: "panel",component:PanelComponent},
  {path: "footer",component:FooterComponent},
  {path: "login",component:LoginComponent},
  {path: "register",component:RegisterComponent},
  {path: "reset-password",component:ResetPasswordComponent},
  {path: "aboutus",component:AboutusComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
