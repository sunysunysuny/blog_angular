import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/config';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  // getBlogs() 
  // {
  //    return this._http.get(config.host + 'blog_post', { headers: config.headers }); 
  // }

  displayMenu = new Subject<any>();
}
