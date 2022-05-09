import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  url = environment.baseURL;
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  excelExportingApi(dataUrl: string) {
    return this.http.get(this.url + `${dataUrl}`);
  }
  filterThenExport(dataUrl: string, body: any) {
    return this.http.post(this.url + `${dataUrl}`, body);
  }
  uploadSingleImg(dataUrl: string, body: any) {
    return this.http.post(this.url + `${dataUrl}`, body);
  }
  concatArray(arr: any[], propName: string) {
    let string = '';
    arr.forEach((element) => {
      if (string.length > 0) {
        string = string + ',' + element[propName];
      } else {
        string = propName;
      }
    });
    return string;
  }
  validateForm(form: any) {
    let controls: any = form.controls;
    let keys: any[] = Object.keys(form.controls);
    if (form.invalid) {
      keys.forEach((element: any) => {
        let keyName = element;
        if (controls[element].errors) {
          form.setErrors({
            ...form.errors,
            [keyName]: controls[element].errors,
          });
        }
      });
      return false;
    } else {
      return true;
    }
  }
  getAllCurrency(){
    return this.http.get(this.url + `Currency/GetAll`);

  }
}
