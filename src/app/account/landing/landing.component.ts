import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  imgPath = environment.assetsImgPath;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(target){
    this.router.navigate(['account/'+target]);
  }

}
