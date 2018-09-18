import { Component, OnInit } from '@angular/core';
import { accountModel } from '../../model/account';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  email;
  password;

  acntModel:accountModel = new accountModel();

  constructor() { }

  ngOnInit() {
    let getCookieEmail = this.getCookie('email');
    let getCookiePass = this.getCookie('pass');
    console.log('email' + getCookieEmail + 'password' + getCookiePass);
    if(getCookieEmail!=null && getCookiePass!=null){
      this.acntModel.email = getCookieEmail;
      this.acntModel.password = getCookiePass;
    }
  }

  public Login(){
    
    this.email = this.acntModel.email;
    this.password = this.acntModel.password;

    if(this.acntModel.rememberme==true){
      console.log('setCookie');
      let exdays = 365
      this.setCookie('email', this.email, exdays);
      this.setCookie('pass', this.password, exdays); 
    }

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
