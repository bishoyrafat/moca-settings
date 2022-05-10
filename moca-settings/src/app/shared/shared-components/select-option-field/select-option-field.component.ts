import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-option-field',
  templateUrl: './select-option-field.component.html',
  styleUrls: ['./select-option-field.component.css']
})
export class SelectOptionFieldComponent implements OnInit {
@Input() textLabel:string;
@Input() defaultOption:string;
@Input() control:any;
  constructor() { }
optionsValue=[1,2,3,4]
  ngOnInit(): void {
  }

}
