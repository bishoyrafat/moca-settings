import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-time-input',
  templateUrl: './time-input.component.html',
  styleUrls: ['./time-input.component.css'],
})
export class TimeInputComponent implements OnInit, OnChanges {
  constructor(private datePipe: DatePipe) {}
  @Output() timeValue: EventEmitter<string> = new EventEmitter();
  form = new FormGroup({
    hrs: new FormControl('', Validators.required),
  });
  @Input() reset: boolean = false;
  @Input() err: boolean = false;
  @Input() startHour: string='0';
  @Input() endHour: string='24';
  @Input() value: string;
  hours: any[] = [];
  hoursCopy: any[] = [];

  minutes: any[] = [
    {
      name: '00',
      value: '00',
    },

    {
      name: '30',
      value: '30',
    },
  ];
  hourValue: string = '00';
  minutesValue: string = '00';

  ngOnInit(): void {
    this.reset = false;
  }
  ngOnChanges(changes: any): void {

    this.form.reset();
    this.form.controls['hrs'].setValue('');
    
    if(changes.value&&changes.value.currentValue){
      this.form.controls['hrs'].setValue(changes.value.currentValue);
    }
    if (changes.startHour) {
      this.startHour = changes.startHour.currentValue;
      let x: any = this.hoursCopy.findIndex((element) => {
        return element.value === this.startHour;
      });
      if (x > -1) {
        this.hours = this.hoursCopy.slice(x);
        this.hours.splice(0, 1);
        this.form.get('hrs')?.setValue(this.hours[0]?.value)
        this.timeValue.emit(this.form.controls['hrs'].value)
      }
    }

    if (changes.endHour) {
      this.endHour = changes.endHour.currentValue;
    }
    if (this.hoursCopy.length === 0) {
      for (let i = +this.startHour; i < +this.endHour; i++) {
        for (let j = 0; j < this.minutes.length; j++) {
          if (i < 12) {
            this.hours.push({
              name:
                ((i + 11) % 12) + 1 + ':' + this.minutes[j].value + ' ' + 'AM',

              value:
                ((i + 11) % 12) + 1 + ':' + this.minutes[j].value + ' ' + 'AM',
            });
            this.hoursCopy.push({
              name:
                ((i + 11) % 12) + 1 + ':' + this.minutes[j].value + ' ' + 'AM',

              value:
                ((i + 11) % 12) + 1 + ':' + this.minutes[j].value + ' ' + 'AM',
            });
          } else {
            this.hours.push({
              name:
                ((i + 11) % 12) + 1 + ':' + this.minutes[j].value + ' ' + 'PM',

              value:
                ((i + 11) % 12) + 1 + ':' + this.minutes[j].value + ' ' + 'PM',
            });
            this.hoursCopy.push({
              name:
                ((i + 11) % 12) + 1 + ':' + this.minutes[j].value + ' ' + 'PM',

              value:
                ((i + 11) % 12) + 1 + ':' + this.minutes[j].value + ' ' + 'PM',
            });
          }
        }
      }
      0;
    }
  }
  timeChanaged() {
    this.hourValue = this.form.controls['hrs'].value;
    if (this.form.valid) {
      this.timeValue.emit(`${this.hourValue}`);
    }
  }
}
