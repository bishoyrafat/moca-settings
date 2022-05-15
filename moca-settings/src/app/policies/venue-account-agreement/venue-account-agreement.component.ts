import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-venue-account-agreement',
  templateUrl: './venue-account-agreement.component.html',
  styleUrls: ['./venue-account-agreement.component.css']
})
export class VenueAccountAgreementComponent implements OnInit {

  form: FormGroup;
  isInputRequired = false;
  hasEdit = false;
  hasAdd = true;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      control: new FormControl('',Validators.required),
    });
  }
  content(e: any) {
    this.form.get('control')?.setValue(e);
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
    }
    this.helper();
  }

  edit() {
    this.helper();
  }

}
