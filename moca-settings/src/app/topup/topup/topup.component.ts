import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topup',
  templateUrl: './topup.component.html',
  styleUrls: ['./topup.component.css']
})
export class TopupComponent implements OnInit {
  disableInput=false
  form:FormGroup


  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      hourly:new FormControl()
    })
  }
  content(e: any, type: string) {
    // if (type === 'hourly') {
    //   this.form.get('hourly').setValue(e);
    // }
    // if (type === 'day') {
    //   this.form.get('day').setValue(e);
    // }
    // if (type === 'tailored') {
    //   this.form.get('tailored').setValue(e);
    // }
    // if (type === 'meetingSpace') {
    //   this.form.get('meetingSpace').setValue(e);
    // }
  }
}
