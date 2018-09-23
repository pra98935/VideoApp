import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private AccountService:AccountService) { }

  ngOnInit() {
    this.getAllLocalStorageData();
  }

  logout(){
    this.AccountService.userLogOut();
  }

  loginUserData = {
    account_type:'',
    email_id:'',
    user_id:''
  }

  getAllLocalStorageData(){
    if (typeof(Storage) !== "undefined") {
      this.loginUserData = {
        account_type:localStorage.getItem('account_type'),
        email_id:localStorage.getItem('email_id'),
        user_id:localStorage.getItem('user_id')
      }
    }
  }

}
