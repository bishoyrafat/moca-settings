import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
@Input() labelText :string;
@Input() inputPlaceholder :string;
@Input() control :any;
  constructor() { }

  ngOnInit(): void {
  }

}
