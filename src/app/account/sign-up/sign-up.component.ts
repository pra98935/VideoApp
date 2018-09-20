import { Component, OnInit } from '@angular/core';
import { accountModel } from '../../model/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SIgnUpComponent implements OnInit {

  acntModel:accountModel = new accountModel();
  responseObject;

  constructor(private AccountService1 : AccountService) { }

  ngOnInit() {
    // this.AccountService.userRegistration1(data).
    // subscribe(function(response){
      
    // })
  }

  public submit(){
    let self = this;
    let getData = this.acntModel;

    let person = new Object();
    let data = {
        method:'addUsers',
        name:getData.name,
        email_id:getData.email,
        password:getData.password,
        device_id:'0',
        lang_type:'EN',
        location:'Indore',
        latitude:'00.000',
        longitude:'00.000'
    }
    alert('out');
    this.AccountService1.userRegistration(data).subscribe(function(response){
      alert('in');
      console.log(response);
    });
  }

}
