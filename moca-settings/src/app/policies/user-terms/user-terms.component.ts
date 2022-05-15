import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-terms',
  templateUrl: './user-terms.component.html',
  styleUrls: ['./user-terms.component.css']
})
export class UserTermsComponent implements OnInit {

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
