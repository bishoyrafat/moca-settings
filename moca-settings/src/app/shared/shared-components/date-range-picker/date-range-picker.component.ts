import {
  Component,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlContainer,
  FormControl,
  FormControlDirective,
  FormGroup,
} from '@angular/forms';
import {
  NgbCalendar,
  NgbDate,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DateRangePickerComponent,
      multi: true,
    },
  ],
})
export class DateRangePickerComponent implements OnChanges {
  constructor(
    private controlContainer: ControlContainer,
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter
  ) {}

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null = null;
  toDate: NgbDate | null = null;
  bottom = 'bottom';
  @Input() labelText: string;
  @Input() inputRequired: boolean;
  @Input() hideLabel: boolean = false;
  @Input() inputType: string;
  @Input() inputMin: number;
  @Input() inputMax: number;
  @Input() inputextraClass: string;
  @Input() errMsg: string = '';
  @Input() reset: boolean = false;

  @Output() dateChange: EventEmitter<any> = new EventEmitter();

  fromModel: any;
  toModel: any;
  ngOnChanges(change: any) {
    this.clear();
  }
  clear() {
    this.fromDate = null;
    this.toDate = null;
  }
  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    let from = this.fromDate
      ? `${this.fromDate.year}-${this.fromDate.month}-${this.fromDate.day}`
      : null;
    let to = this.toDate
      ? `${this.toDate?.year}-${this.toDate?.month}-${this.toDate?.day}`
      : null;
    this.dateChange.emit({ from, to });
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
}
