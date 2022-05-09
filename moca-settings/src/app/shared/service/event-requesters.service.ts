import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventRequestersService {
  url = environment.baseURL + `v${environment.version}/`;
  constructor(private http: HttpClient) {}

  getAllEventRequesters() {
    return this.http.get(this.url + `EventRequester/GetAll`);
  }
}
