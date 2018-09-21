import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { 
    this.setLoginUserData();
  }

  

  loginUserData = {
    method:'',
    email_id:'',
    password:''
  }

  setLoginUserData(){
    this.loginUserData = {
      method:localStorage.getItem(''),
      email_id:localStorage.getItem(''),
      password:localStorage.getItem('')
    }
  }

}
