import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { 
    //this.setLoginUserData();
  }

  

  loginUserData = {
    account_type:'',
    email_id:'',
    user_id:''
  }

  setLoginUserData(){
    alert('setloginuserdata');
    this.loginUserData = {
      account_type:localStorage.getItem('account_type'),
      email_id:localStorage.getItem('email_id'),
      user_id:localStorage.getItem('user_id')
    }
    alert('l-'+this.loginUserData.email_id);
  }

}
