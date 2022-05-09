import { Component, Input, OnInit, ViewChild, OnChanges } from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CurrencyInputComponent,
      multi: true,
    },
  ],
})
export class CurrencyInputComponent implements OnInit, OnChanges {
  constructor(private controlContainer: ControlContainer) {}

  @Input() labelText: string;
  @Input() placeholder: string;
  @Input() inputRequired: boolean;
  @Input() hideLabel: boolean = false;
  @Input() disabled: boolean = false;
  @Input() inputType: string;
  @Input() inputMin: number;
  @Input() inputMax: number;
  @Input() inputextraClass: string;
  @Input() errMsg: string = '';
  @Input() currency: string = '';
  @Input() formControl: FormControl;
  @Input() formControlName: string;

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;

  fieldValue: any;

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
  ngOnInit(): void {}
  ngOnChanges(changes: any): void {
    this.fieldValue = this.control.value;

    if (changes.disabled) {
      this.disabled = changes.disabled?.currentValue;
    }
    if (changes.formControlName) {
      this.formControlName = changes.formControlName?.currentValue;
    }
  }

  // isNumberKey(e: any) {
  //   debugger
  //   var charCode = e.which ? e.which : e.keyCode;
  //   if (
  //     charCode > 31 &&
  //     (charCode < 48 || charCode > 57) &&
  //     (charCode < 96 || charCode > 105) 
  //   )
  //     return false;
  //   return true;
  // }
}
