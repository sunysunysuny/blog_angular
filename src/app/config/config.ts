import { HttpHeaders } from '@angular/common/http';  

export var config = {
 
    // host: 'https://laravel-dot-rosy-valor-239718.ey.r.appspot.com/api/',
     host: 'http://127.0.0.1:8000/api/',
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
    })
  }


  