import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { profileModel } from '../../model/profile';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  profileModel:profileModel = new profileModel();

  @Input() sessionData;

  constructor(private AccountService:AccountService) { }

  getResponse;
  

  ngOnInit() {
    this.getProfileDetailById();
  }

  logout(){
    this.AccountService.userLogOut();
  }

  getProfileDetailById(){
    let data = [{
      "method":"getProfile",
      "user_id":this.sessionData.user_id
    }]


    let self = this;
    
    this.AccountService.getUserProfile(data).subscribe(function(response){
      self.getResponse = response;
      
      self.profileModel.name = self.getResponse.result.name;
      self.profileModel.email_id = self.getResponse.result.email_id;
      self.profileModel.address = self.getResponse.result.address;
      
    })
  }

}
