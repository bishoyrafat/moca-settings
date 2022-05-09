import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {
form:FormGroup=new FormGroup({
description:new FormControl(),
points:new FormControl(),
whatYouGet:new FormControl(),
termsOfUse:new FormControl(),
})

  constructor() { }

  ngOnInit(): void {
  }

}
