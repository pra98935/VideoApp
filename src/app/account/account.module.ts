import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AccountRoutingModule } from './account-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SIgnUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LandingComponent } from './landing/landing.component';

import { AccountService } from '../services/account.service';
import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    HttpModule
    
  ],
  declarations: [SignInComponent, SIgnUpComponent, ResetPasswordComponent, LandingComponent],
  providers:[AccountService, AuthenticationService]
})
export class AccountModule { }
