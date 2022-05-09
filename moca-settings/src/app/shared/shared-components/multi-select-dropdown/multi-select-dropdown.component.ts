import {
  Component,
  Input,
  OnInit,
  ViewChild,
  OnChanges,
  SimpleChanges,
  AfterViewChecked,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormControlDirective,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MultiSelectDropdownComponent,
      multi: true,
    },
  ],
})
export class MultiSelectDropdownComponent
  implements OnInit, AfterViewChecked, OnChanges
{
  constructor(
    private controlContainer: ControlContainer,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  @Input() labelText: string;
  @Input() inputRequired: boolean = false;
  @Input() hideLabel: boolean = false;
  @Input() inputextraClass: string;
  @Input() errMsg: string = '';
  @Input() formControl: FormControl;
  @Input() formControlName: string;
  @Input() options: { item_id: any; item_text: any; images?: string }[] = [];
  optionsCopy: { item_id: any; item_text: any; images?: string }[];

  form: FormGroup;

  @Output() newValue: EventEmitter<any> = new EventEmitter();

  @ViewChild(FormControlDirective, { static: true })
  formControlDirective: FormControlDirective;
  @ViewChild('allSelected') private allSelected: MatOption;
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

  ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  ngOnInit() {
    this.form = new FormGroup({
      options: new FormControl(this.options),
    });
  }
  ngOnChanges(change: any) {
    if (change.options) {
      this.options = change.options.currentValue;
      this.optionsCopy = change.options.currentValue;
    }
  }
  filter(e: any) {
    this.options = this.optionsCopy.filter((element) => {
      return element.item_text.toLowerCase().includes(e.target.value);
    });
  }
  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.control.patchValue([
        ...this.options.map((item) => item.item_id),
        'AllChoices',
      ]);
    } else {
      this.control.patchValue([]);
    }
  }
  valueChange() {
    this.newValue.emit(this.control.value)
  }
}
