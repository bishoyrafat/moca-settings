import { getLocaleEraNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WifiService } from './wifi.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.css'],
})
export class WifiComponent implements OnInit {
  form: FormGroup;
  isInputRequired = false;
  hasEdit = true;
  hasAdd = false;
  wifiBody: any;
  constructor(private WifiService: WifiService,private ToastrService:ToastrService) {}

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
    // this.isInputRequired = !this.isInputRequired;
    this.hasEdit = !this.hasEdit;
    this.hasAdd = !this.hasAdd;
  }
  saveAndSubmit() {
    if (this.form.invalid) return;
    else {
      this.postWifi(this.form.value.description);
    }
    this.helper();
    this.isInputRequired = true;

  }

  edit() {
    this.helper();
    this.isInputRequired = false;


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
      this.ToastrService.success('Update Done Successfully ')

    });
  }
}
