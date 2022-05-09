import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  url = environment.baseURL + `v${environment.version}/`;
  constructor(private http: HttpClient) {}

  getAllCountries() {
    return this.http.get(`${this.url}Country`);
  }
  getCityByCountryId(id: any) {
    return this.http.get(`${this.url}City/GetByCountryId?CountryId=${id}`);
  }
  getDistrictByCityId(id: any) {
    return this.http.get(`${this.url}District/GetByCityId?cityId=${id}`);
  }
}
