import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyGuardGuard } from './my-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account',
    pathMatch:'full'
  },
  {
    path: 'account',
    loadChildren:'../app/account/account.module#AccountModule' 
  },
  {
    path: 'home',
    loadChildren:'../app/home/home.module#HomeModule' ,
    canActivate:[MyGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
