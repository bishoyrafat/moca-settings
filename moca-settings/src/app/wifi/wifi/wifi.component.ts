import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WifiService } from './wifi.service';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.css'],
})
export class WifiComponent implements OnInit {
  form: FormGroup;
  isInputRequired = false;
  hasEdit = false;
  hasAdd = true;
  wifiBody: any;
  constructor(private WifiService: WifiService) {}

  ngOnInit() {
    this.getWifi();
    this.form = new FormGroup({
      description: new FormControl('', Validators.required),
    });
  }
  content(e: any) {
    this.form.get('description')?.setValue(e);
  }

  helper() {
    this.isInputRequired = !this.isInputRequired;
    this.hasEdit = !this.hasEdit;
    this.hasAdd = !this.hasAdd;
  }
  saveAndSubmit() {
    if (this.form.invalid) return;
    else {
      console.log(this.form.value);
      this.postWifi(this.form.value.description);
    }
    this.helper();
  }

  edit() {
    this.helper();
  }

  getWifi() {
    this.WifiService.getWifi().subscribe((data: any) => {
      this.wifiBody = data.data.description;
    });
  }

  postWifi(body:any) {
    this.WifiService.postWifi({
      description: body,
    }).subscribe((data: any) => {
    });
  }
}
