import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGuardGuard } from './my-guard.guard';
import { AuthenticationService } from './services/authentication.service';
import { AccountService } from './services/account.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MyGuardGuard, AuthenticationService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
