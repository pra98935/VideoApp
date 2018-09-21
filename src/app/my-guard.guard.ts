import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class MyGuardGuard implements CanActivate {
 
  constructor(private AuthenticationService:AuthenticationService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem('email_id')){
      console.log('you are logged in');
      return true;
    }else{
      console.log('you are not logged in');
      this.router.navigate(['account/login']);
    }
    

  }
}
