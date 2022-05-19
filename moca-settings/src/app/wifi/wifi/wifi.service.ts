import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WifiService {

  constructor( private http: HttpClient) {}
  url = environment.baseURL + `v${environment.version}/`;

  getWifi(){
    return this.http.get(this.url + 'Wifis')
  }

postWifi(body:any){
  return this.http.post(this.url + 'Wifis',body)
}
}
