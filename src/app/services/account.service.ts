import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AccountService {

  handleError: any;
  constructor(private http: Http) { }

  // userRegistration(data):Observable<object>{
  //   let body = data;
  //   return this.http.post('http://devpatidar.com/app/administrator/genral_apis/customer_apis.php', body)
  //   .map(response => {
  //     return response.json();
  //   })
  //   .catch(this.handleError);
  // }

  userRegistration(data):Observable<object>{
    let body = data;
    return this.http.post('http://prashant.imdev.xyz/administrator/genral_apis/customer_apis.php', body)
    .map(Response => {
      return Response.json();
    })
    .catch(this.handleError);
  }

}
