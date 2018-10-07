import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyGuardGuard } from './my-guard.guard';
import { AuthenticationService } from './services/authentication.service';
import { AccountService } from './services/account.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from './services/shared.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [MyGuardGuard, AuthenticationService, AccountService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
