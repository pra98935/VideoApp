import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class SharedService {
  apiURL=environment.apiURL;
  constructor(private HttpClient:HttpClient) { }

  getAllCategory(data){
    let body = data;
    return this.HttpClient.post('http://prashant.imdev.xyz/administrator/genral_apis/category_apis.php', body);
  }
}
