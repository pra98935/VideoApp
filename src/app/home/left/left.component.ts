import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ISubscription } from '../../../../node_modules/rxjs/Subscription';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  getCategoryListRes:ISubscription;
  getData;
  constructor(private SharedService:SharedService) { }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList(){
    let self = this;
    let data = [{"method":"getAllCategory"}];
    this.getCategoryListRes = this.SharedService.getAllCategory(data).subscribe(
      data=>{
        if(data != null && data != undefined){
          //console.log(data.result);
          self.getData = data;
          console.log(self.getData.result);
        }
      },
      error => {
        alert('something is going wrong');
      }
    )
  }

  ngOnDestroy() {
    if(this.getCategoryListRes != undefined){
      this.getCategoryListRes.unsubscribe();
    }
  }

}
