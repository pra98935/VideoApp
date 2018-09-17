import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SIgnUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'', redirectTo:'landing', pathMatch:'full'},
  {path:'login', component:SignInComponent},
  {path:'register', component:SIgnUpComponent},
  {path:'resetPassword', component:ResetPasswordComponent},
  {path:'landing', component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
