import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LeftComponent } from './left/left.component';
import { TopComponent } from './top/top.component';
import { RightComponent } from './right/right.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, LeftComponent, TopComponent, RightComponent],
  providers:[]

})
export class HomeModule { }
