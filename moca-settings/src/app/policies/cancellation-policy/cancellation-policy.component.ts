import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancellation-policy',
  templateUrl: './cancellation-policy.component.html',
  styleUrls: ['./cancellation-policy.component.css'],
})
export class CancellationPolicyComponent implements OnInit {
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
