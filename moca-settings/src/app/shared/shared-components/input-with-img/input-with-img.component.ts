import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, FormControl, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-input-with-img',
  templateUrl: './input-with-img.component.html',
  styleUrls: ['./input-with-img.component.css']
})
export class InputWithImgComponent implements OnInit {

  constructor(private controlContainer: ControlContainer) {}

  @Input() labelText: string;
  @Input() inputType: string;
  @Input() inputMin: string;
  @Input() inputMax: string;
  @Input() inputextraClass: string;
  @Input() errMsg: string = '';
  @Input() formControl: FormControl;
  @Input() formControlName: string;
  @Input() imgPath: string;

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
