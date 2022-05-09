import { formatDate } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormControlDirective,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFieldComponent,
      multi: true,
    },
  ],
})
export class InputFieldComponent implements OnInit, OnChanges {
  constructor(private controlContainer: ControlContainer) {}

  @Input() labelText: string;
  @Input() placeholder: string;
  @Input() inputRequired: boolean;
  @Input() hideLabel: boolean = false;
  @Input() hideplaceholder: boolean = false;
  @Input() disabled: boolean = false;
  @Input() inputType: string;
  @Input() inputMin: number;
  @Input() inputMax: number;
  @Input() inputextraClass: string;
  @Input() errMsg: string = '';
  @Input() formControl: FormControl;
  @Input() formControlName: string;
  @Input() minDate: any = formatDate(
    new Date(Date.now()),
    'yyyy-MM-dd',
    'en-EN'
  );

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
  ngOnInit(): void {}
  ngOnChanges(changes: any): void {
    this.disabled = changes.disabled?.currentValue;
  }
  checkSpaces(e: any) {
    //

    if (this.errMsg === '' || this.errMsg.includes('Should Contains Characters')) {
      let string: string = e.target.value;

      if (string.length > 0 && string.trim().length === 0) {
        this.errMsg = `${this.labelText} Should Contains Characters`;
      } else {
        this.errMsg = '';
      }
    }
  }
}
