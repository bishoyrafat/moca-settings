import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor( private http: HttpClient) {}
  url = environment.baseURL + `v${environment.version}/`;


}
