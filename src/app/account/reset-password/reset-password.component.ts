import { Component, OnInit } from '@angular/core';
import { accountModel } from '../../model/account';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  acntModel:accountModel = new accountModel();

  constructor() { }

  ngOnInit() {
  }

}
