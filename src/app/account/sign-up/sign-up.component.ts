import { Component, OnInit } from '@angular/core';
import { accountModel } from '../../model/account';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SIgnUpComponent implements OnInit {

  acntModel:accountModel = new accountModel();

  constructor() { }

  ngOnInit() {

  }

  public submit(){
    console.log(this.acntModel);
  }

}
