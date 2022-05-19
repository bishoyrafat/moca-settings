import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, FormControl, FormControlDirective, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DropdownFieldComponent } from '../dropdown-field/dropdown-field.component';

@Component({
  selector: 'app-dropdown-bootstrap',
  templateUrl: './dropdown-bootstrap.component.html',
  styleUrls: ['./dropdown-bootstrap.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownFieldComponent,
      multi: true,
    },
  ],
})
export class DropdownBootstrapComponent implements OnInit {
  constructor(private controlContainer: ControlContainer) {}

  @Input() labelText: string;
  @Input() inputRequired: boolean;
  @Input() hideLabel: boolean=false;

  @Input() inputextraClass: string;
  @Input() errMsg: string = '';
  @Input() formControl: FormControl;
  @Input() formControlName: string;
  @Input() options: { name: string; value: any;images?:string }[];

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;

  get control() {
    return (
      this.formControl ||
      this.controlContainer?.control?.get(this.formControlName)
    );
  }
  registerOnTouched(fn: any): void {
    this.formControlDirective?.valueAccessor?.registerOnTouched(fn);
  }

  registerOnChange(fn: any): void {
    this.formControlDirective.valueAccessor?.registerOnChange(fn);
  }

  writeValue(obj: any): void {
    this.formControlDirective.valueAccessor?.writeValue(obj);
  }
  ngOnInit(): void {

  }

}
