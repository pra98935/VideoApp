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
  getDataArray=[];
  constructor(private SharedService:SharedService) { }

  ngOnInit() {
    this.getCategoryList();
  }

  getCategoryList(){
    let self = this;
    let data = [{"method":"getAllCategory"}];
    this.getCategoryListRes = this.SharedService.getAllCategory(data).subscribe(
      (data:any)=>{
        if(data != null && data != undefined){          
          this.getDataArray = data.result;
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
