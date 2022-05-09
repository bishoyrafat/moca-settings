import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent implements OnInit {
@Input() textLabel:string;
@Input() placeholder:string='';
@Input() formControl:FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}