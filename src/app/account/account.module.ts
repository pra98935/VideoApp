import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SIgnUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule
  ],
  declarations: [SignInComponent, SIgnUpComponent, ResetPasswordComponent, LandingComponent]
})
export class AccountModule { }
