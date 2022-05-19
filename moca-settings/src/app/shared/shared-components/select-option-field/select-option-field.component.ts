import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-option-field',
  templateUrl: './select-option-field.component.html',
  styleUrls: ['./select-option-field.component.css'],
})
export class SelectOptionFieldComponent implements OnInit {
  @Input() textLabel: string;
  @Input() defaultOption: string;
  @Input() control: any;
  @Input() optionsValue: any;
  constructor() {}
  // optionsValue = [
  //   {
  //     name: '1',
  //     value: '1',
  //   },
  //   {
  //     name: '2',
  //     value: '2',
  //   },
  //   {
  //     name: '3',
  //     value: '3',
  //   },
  //   {
  //     name: '4',
  //     value: '4',
  //   },
  // ];
  ngOnInit(): void {}
}
