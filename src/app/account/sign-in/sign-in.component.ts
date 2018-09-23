import { Component, OnInit } from '@angular/core';
import { accountModel } from '../../model/account';
import { AuthenticationService } from '../../services/authentication.service';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email;
  password;
  getResponseData;

  acntModel:accountModel = new accountModel();

  constructor(private router: Router ,private AccountService:AccountService, private AuthenticationService:AuthenticationService) { }

  ngOnInit() {
    let getCookieEmail = this.getCookie('email');
    let getCookiePass = this.getCookie('pass');
    //console.log('email' + getCookieEmail + 'password' + getCookiePass);
    if(getCookieEmail!=null && getCookiePass!=null){
      this.acntModel.email = getCookieEmail;
      this.acntModel.password = getCookiePass;
    }
  }

  public Login(){
    let self = this;
    this.email = this.acntModel.email;
    this.password = this.acntModel.password;

    // Remember me 
    if(this.acntModel.rememberme==true){
      //console.log('setCookie');
      let exdays = 365
      this.setCookie('email', this.email, exdays);
      this.setCookie('pass', this.password, exdays); 
    }

    let data = [{
      method:'login',
      email_id:this.email,
      password:this.password
    }]

    this.AccountService.userLogin(data).subscribe(
      userData => {
        //console.log(userData);
        this.getResponseData = userData;
        console.log(this.getResponseData.message);
        console.log(this.getResponseData.status);
        console.log(this.getResponseData.result.account_type);
        console.log(this.getResponseData.result.email_id);
        console.log(this.getResponseData.result.user_id);

        localStorage.setItem('account_type', this.getResponseData.result.account_type);
        localStorage.setItem('email_id', this.getResponseData.result.email_id);
        localStorage.setItem('user_id', this.getResponseData.result.user_id);
        //this.AuthenticationService.setLoginUserData();
        this.router.navigate(['home/dashboard']);

        
      },
      error => {
        console.log('error');
      }
    );



  }

  public getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  public setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

}
